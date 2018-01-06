import * as types from '../action-types';
let initState = {
    error:'',//错误消息
    success:'',//成功消息
    user:null,//如果登录成功，需要给此属性赋值，为登录用户
};
export default function (state=initState,action) {//state 老状态，action 当前action
    switch (action.type){
        case types.REG:
            return {
                ...action.payload
                // error:action.payload.error,
                // success:action.payload.success
            };
            break;
        case types.LOGIN:
            return {
                ...action.payload
            };
            break;
        case types.LOGOUT:
            return {
                ...action.payload
            };
            break;
        case types.CLEAR_MESSAGES:
            return {
                ...state,
                error:'',
                success:''
            };
            break;
        case types.VALIDATE:
            return {
                ...state,
                ...action.payload
            };
            break;
        default:
            return state;
    }
}