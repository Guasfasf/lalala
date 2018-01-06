import React,{Component} from 'react';
import NavHeader from "../../components/NavHeader/index";
import {Link} from 'react-router-dom';
import './index.less'
import {connect} from 'react-redux'
import actions from '../../store/actions/session'

class Reg extends Component{
    handleReg=()=>{
        let username = this.username.value;
        let password = this.password.value;
        this.props.reg({username,password})
    };
    render(){
        return (
            <div className='reg-panel'>
                <NavHeader title={'注册'}/>
                <div className="reg-logo"> </div>
                <input ref={input=>this.username=input} type="text" placeholder='用户名'/>
                <input ref={input=>this.password=input} type="text" placeholder='密码'/>
                <Link to='/login'>前往登录</Link><Link to='/'>回到首页</Link>
                <div className='reg-btn' onClick={this.handleReg}>注&nbsp;册</div>
            </div>
        )
    }
}

export default connect(
    state=>state.session,
    actions
)(Reg);