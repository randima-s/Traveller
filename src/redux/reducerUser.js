
import * as ActionTypes from "./ActionTypes";

export const User=(state={user:null,isLoggedIn:false,error:null},action)=>{
    switch(action.type){
        case ActionTypes.UPDATE_USER:
            return {...state,user:action.payload.user, isLoggedIn:action.payload.isLoggedIn,error:action.payload.error};
        default:
            return state;
    }
}