import React,{Component} from 'react';
import NavHeader from "../../components/NavHeader/index";
import {Link} from 'react-router-dom';
import './index.less'
import {connect} from 'react-redux';
import actions from '../../store/actions/session';

class Login extends Component{
    handleClick=()=>{
        let username = this.username.value;
        let password = this.password.value;
        this.props.login({username,password})
    };
    render(){
        return (
            <div className='login-panel'>
                <NavHeader title={'登录'}/>
                <div className="login-logo"> </div>
                <input ref={input=>this.username=input} type="text" placeholder='用户名'/>
                <input ref={input=>this.password=input} type="text" placeholder='密码'/>
                <Link to='/reg'>前往注册</Link><Link to='/'>回到首页</Link>
                <div className='login-btn' onClick={this.handleClick}>登&nbsp;录</div>
            </div>
        )
    }
}
export default connect(
    state=>state.session,
    actions
)(Login)