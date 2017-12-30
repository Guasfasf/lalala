import React,{Component} from 'react';
import {Link} from 'react-router-dom'
import './index.less'

export default class HomeLesson extends Component{
    render(){
        return (
            <div className='home-lessons'>
                {
                    this.props.lessons.map((item,index)=>(
                        <Link key={index} to={{pathname:`detail/${item.id}`,state:item}}>
                            <div className='lesson'>
                                <img src={item.photo} alt=""/>
                                <p>{item.age}</p>
                            </div>
                        </Link>
                    ))
                }
            </div>
        )
    }
}