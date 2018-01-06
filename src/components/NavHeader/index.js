import React,{Component} from 'react';
import './index.less'
import {withRouter} from 'react-router-dom';
 class NavHeader extends Component{
    render(){
        return (
            <div className='nav-header' >
                {this.props.title}
                <i onClick={()=>this.props.history.goBack()}>っ</i>
            </div>
        )
    }
}
export default withRouter(NavHeader);