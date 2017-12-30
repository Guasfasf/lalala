import React,{Component} from 'react';
import {NavLink} from 'react-router-dom'
import './index.less'

export default class Tab extends Component{
    render(){
        return (
            <div className='tab'>
                <NavLink exact to='/'>
                    <span>首页</span>
                </NavLink>
                <NavLink exact to='/people'>
                    <span>个人中心</span>
                </NavLink>
            </div>
        )
    }
}