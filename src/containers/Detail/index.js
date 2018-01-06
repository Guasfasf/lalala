import React,{Component} from 'react';
import './index.less'
import NavHeader from "../../components/NavHeader/index";
export default class Detail extends Component{
    render(){
        let lesson = this.props.location.state;
        if(!lesson){
            lesson={}
        }
        return (
            <div className='lesson-detail'>
                <NavHeader title={'详情'}/>
                <img src={lesson.photo} alt=""/>
                <p>{lesson.name}</p>
                <p>{lesson.age}</p>
            </div>
        )
    }
}