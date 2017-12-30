let express = require('express');
// let bodyParser = require('body-parser');
let app = express();
// app.use(bodyParser.json());
app.use(function (req,res,next){
    res.header('Access-Control-Allow-Origin','http://localhost:8080');//跨域设置,只允许8080访问
    res.header('Access-Control-Allow-Methods','GET,POST,DELETE,PUT');//服务允许客户端发的方法
    res.header('Access-Control-Allow-Headers','Content-Type, Accept');//服务器允许的请求头
    res.header('Access-Control-Allow-Credentials','true');//允许客户端把cookie发过来
    if(req.method==='OPTIONS'){//请求方法是options，那么意味着客户端只要响应头，直接结束响应即可
        res.end();
    }else {
        next();
    }
});

let sliders = require('./mock/sliders');
app.get('/api/sliders',function (req,res) {
    res.json(sliders);
});
let lessons = require('./mock/lessons');
app.get('/api/lessons',function (req,res) {
    let {type='',offset=0,limit=5}  =  req.query;
    offset = isNaN(offset)?0:parseInt(offset);
    limit = isNaN(limit)?0:parseInt(limit);
    let newLessons = JSON.parse(JSON.stringify(lessons));
    newLessons.list = newLessons.list.filter(item=>item.type==type||type=='');//如果type为空不过滤课程类型，type不为空，则是出现与type类型相匹配的数据
    newLessons.hasMore = limit+offset<newLessons.list.length;
    newLessons.list = newLessons.list.slice(offset,offset+limit);
    for(let i = 0;i<newLessons.list.length;i++){
        let lesson = newLessons.list[i];
        lesson.title = `${offset+i+1}-${lesson.title}`
    }
    res.json(lessons);
});
app.listen(3000);