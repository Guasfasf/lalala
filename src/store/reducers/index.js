import {combineReducers} from 'redux';
import home from './home';
import {routerReducer} from 'react-router-redux'

let reducers = combineReducers({
    home,
    router:routerReducer
});
export default reducers;