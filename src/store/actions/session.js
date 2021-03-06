import * as types from '../action-types';
import {reg,login,logout,validate} from '../../api/session';
import {push} from 'react-router-redux';

export default {
    reg(user){
        // console.log(23);
        return function (dispatch,getState) {
            reg(user).then(result=>{
                let {code,success,error} = result;
                dispatch({
                    type:types.REG,
                    payload:{success,error}
                });
                if(code===0){
                    dispatch(push('/login'))
                }
            })
        }
    },
    login(user){
        return function (dispatch,getState) {
            login(user).then(result=>{
                let {code,success,error,user} = result;
                dispatch({
                    type:types.LOGIN,
                    payload:{success,error,user}
                });
                if(code===0){
                    dispatch(push('/people'))
                }
            })
        }
    },
    logout(){
        return function (dispatch,getState) {
            logout().then(result=>{
                let {code,success,error} = result;
                dispatch({
                    type:types.LOGOUT,
                    payload:{success,error}
                })
                dispatch(push('/people'))
            })
        }
    },
    clearMessages(){
        return {
            type:types.CLEAR_MESSAGES
        }
    },
    validate(){
        return function (dispatch,getState) {
            validate().then(result=>{
                let {code,success,error,user} = result;
                dispatch({
                    type:types.VALIDATE,
                    payload:{success,error,user}
                })
            })
        }
    }
}