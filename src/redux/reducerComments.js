
import * as ActionTypes from "./ActionTypes";

export const Comments=(state={comments:[]},action)=>{
    switch(action.type){
        case ActionTypes.ADD_COMMENT:
            const comment=action.payload;
            comment.id=state.comments.length;
            comment.date=new Date().toISOString();
            return {...state,comments:state.comments.concat(comment)};
        default:
            return state;
    }
}