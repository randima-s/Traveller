
import * as ActionTypes from "./ActionTypes";

export const Blogs=(state={blogs:[],isLoading:true,error:null},action)=>{
    switch(action.type){
        case ActionTypes.LOADING_BLOG:
            return {...state,isLoading:true,error:null};
        case ActionTypes.ADD_BLOG:
            return {...state,blogs:state.blogs.concat( action.payload),isLoading:false,error:null}
        case ActionTypes.LOAD_BLOGS:
            return {...state,blogs:action.payload,isLoading:false,error:null}
        case ActionTypes.ERROR_BLOG:
            return {...state,isLoading:false, error:action.payload};
        default:
            return state;
    }
}