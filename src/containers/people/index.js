import React,{Component} from 'react';
import './index.less';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux'
import actions from '../../store/actions/session'

class People extends Component{
    handleLogout=()=>{
        this.props.logout();
    };
    render(){
        return (
            <div className='profile'>
                <div className="profile-bg">
                    <img src="" alt="头像"/>
                    <div>
                        {
                            this.props.user?<span>{this.props.user.username}</span>:<Link to='/login'>登录</Link>
                        }
                    </div>
                    {
                        this.props.user&&<div onClick={this.handleLogout}>退出</div>
                    }
                </div>
            </div>
        )
    }
}
export default connect(
    state=>state.session,
    actions
)(People);