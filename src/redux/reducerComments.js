
import * as ActionTypes from "./ActionTypes";

export const Comments=(state={comments:[]},action)=>{
    switch(action.type){
        case ActionTypes.ADD_COMMENT:
            return {...state,comments:state.comments.concat(action.payload)};
        case ActionTypes.LOAD_COMMENTS:
            return {...state,comments:action.payload};
        default:
            return state;
    }
}