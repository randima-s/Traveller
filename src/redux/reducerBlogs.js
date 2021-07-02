
import * as ActionTypes from "./ActionTypes";

export const Blogs=(state={blogs:[]},action)=>{
    switch(action.type){
        case ActionTypes.LOAD_BLOGS:
            return {...state,blogs:action.payload}
        default:
            return state;
    }
}