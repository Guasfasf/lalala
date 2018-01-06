import * as types from '../action-types';

let initState = {
    type:'',
    sliders:{
        loading:false,
        list:[]
    },
    lessons:{
        loading:false,
        list:[],
        offset:0,
        hasMore:true,
        limit:5
    }
};


export default function (state=initState,action) {
    switch (action.type){
        case types.FETCH_SLIDERS:
            return {
                ...state,
                sliders:{
                    loading:true,
                    list:[]
                }
            };
            break;
        case types.FETCH_SLIDERS_SUCCESS:
            return {
                ...state,
                sliders:{
                    loading:false,
                    list:action.payload
                }
            };
            break;
        case types.FETCH_LESSONS:
            return {
                ...state,
                lessons:{
                    ...state.lessons,
                    loading:true
                }
            };
            break;
        case types.FETCH_LESSONS_SUCCESS:
            return {
                ...state,
                lessons:{
                    ...state.lessons,
                    loading:false,
                    list:[...state.lessons.list,...action.payload.list],
                    offset:state.lessons.offset+action.payload.list.length,
                    hasMore:action.payload.hasMore
                }
            };
            break;

        case types.CHANGE_TYPE:
            return {
                ...state,
                type:action.payload
            };
            break;
        case types.REFRESH_LESSONS:
            return {
                ...state,
                lessons:{
                    ...state.lessons,
                    loading:true,
                    list:[]
                }
            };
            break;
        case types.REFRESH_LESSONS_SUCCESS:
            return {
                ...state,
                lessons:{
                    ...state.lessons,
                    loading:false,
                    list:[...action.payload.list],
                    offset:action.payload.list.length,
                    hasMore:action.payload.hasMore
                }
            };
            break;



        default:
            return state;
    }
}