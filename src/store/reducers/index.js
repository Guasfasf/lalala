import {combineReducers} from 'redux';
import home from './home';
import session from './session';
import {routerReducer} from 'react-router-redux'

let reducers = combineReducers({
    home,
    session,
    router:routerReducer
});
export default reducers;