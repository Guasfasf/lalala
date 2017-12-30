import React,{Component} from 'react';
import './index.less';
import {TransitionGroup,CSSTransition} from 'react-transition-group'

export default class HomeHeader extends Component{
    constructor(){
        super();
        this.state = {showList:false}
    }

    handleClick=()=>{
        this.setState({showList:!this.state.showList})
    };

    changeType=(event)=>{
        let type = event.target.dataset.type;
        this.props.changeType(type);
        this.handleClick();
    };

    getMenuList=()=>(
        <CSSTransition classNames="header-footer" timeout={500}>
            <ul className="oul"
                onClick={this.changeType}
            >
                <li className={this.props.type===""?'active':''} data-type="">大家的</li>
                <li className={this.props.type==="men"?'active':''}data-type="men">帅哥</li>
                <li className={this.props.type==="women"?'active':''}data-type="women">美女</li>
            </ul>
        </CSSTransition>
    );

    render(){
        return (
            <div className='header'>
                <h3>首页</h3>
              <div onClick={this.handleClick} className='dian'>
                  {
                      this.state.showList?<i>-</i>:<i>+</i>
                  }
              </div>
                <TransitionGroup>
                    {
                        this.state.showList&&this.getMenuList()
                    }
                </TransitionGroup>
            </div>
        )
    }
}