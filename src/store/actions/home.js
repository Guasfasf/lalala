import * as types from '../action-types';
import {getSliders,getLessons} from '../../api/home';


let actions = {
    fetchSliders(){
        return function (dispatch,getState) {
            dispatch({
                type:types.FETCH_SLIDERS
            });
            dispatch({
                type:types.FETCH_SLIDERS_SUCCESS,
                payload:getSliders()
            })
        }
    },
    fetchLessons(){
        return function (dispatch,getState) {
            let {
                type,
                lessons:{
                    loading,
                    offset,
                    limit,
                    hasMore
                }
            } = getState().home;
            if(!loading&&hasMore){
                dispatch({
                    type:types.FETCH_LESSONS
                });
                dispatch({
                    type:types.FETCH_LESSONS_SUCCESS,
                    payload:getLessons(type,offset,limit)
                })
            }
        }
    },
    refreshLessons(){//下拉刷新
        return function (dispatch,getState) {
            let {
                type,
                lessons:{
                    loading,offset,limit,hasMore
                }
            } = getState().home;
            if(!loading){
                dispatch({type:types.REFRESH_LESSONS});
                dispatch({type:types.REFRESH_LESSONS_SUCCESS,payload:getLessons(type,0,offset)})//(0,limit)刷新到第一页
            }
        }
    },
    changeType(type){//右上角的课程分类
        return function (dispatch,getState) {
            dispatch({
                type:types.CHANGE_TYPE,
                payload:type
            });
            actions.refreshLessons()(dispatch,getState)
        }
    }

};

export default actions;