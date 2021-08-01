
import * as ActionTypes from "./ActionTypes";

export const Blogs=(state={blogs:[]},action)=>{
    switch(action.type){
        case ActionTypes.ADD_BLOG:
            return {...state,blogs:state.blogs.concat( action.payload)}
        case ActionTypes.LOAD_BLOGS:
            return {...state,blogs:action.payload}
        default:
            return state;
    }
}