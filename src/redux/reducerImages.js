
import * as ActionTypes from "./ActionTypes";

export const Images=(state=[],action)=>{
    switch(action.type){
        case ActionTypes.ADD_IMAGE:
            return state.concat(action.payload);
        case ActionTypes.LOAD_IMAGES:
            //let newPayload=action.payload.map((item)=>({...item,url:action.baseURL+item.url}));
            return state.concat(action.payload);
        default:
            return state;
    }
}