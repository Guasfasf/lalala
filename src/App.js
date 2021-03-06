import React, {Component} from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';
import Home from "./containers/Home/index";
import People from "./containers/people/index";
import Tab from "./components/Tab/index";
import '../index.less';

import createHashHistory from 'history/createHashHistory'
import {ConnectedRouter} from 'react-router-redux';
import Detail from "./containers/Detail/index";
import Login from "./containers/Login/index";
import Reg from "./containers/Reg/index";
//实现了redux仓库和本组件的链接
let history = createHashHistory();//这个history是用来跳转路径的

export default class App extends Component {
    render() {
        return (
            <ConnectedRouter history={history}>
                <div>
                    <Route
                        exact
                        path='/'
                        component={Home}
                    />
                    <Route
                        path='/people'
                        component={People}
                    />
                    <Route
                        path='/detail/:id'
                        component={Detail}
                    />
                    <Route
                        path='/login'
                        component={Login}
                    />
                    <Route
                        path='/reg'
                        component={Reg}
                    />
                    <Tab/>
                </div>
            </ConnectedRouter>
        )
    }
}