
import * as ActionTypes from "./ActionTypes";

export const Explore=(state=[],action)=>{
    switch(action.type){
        case ActionTypes.LOAD_EXPLORE:
            let newPayload=action.payload.map((item)=>{return ({...item,image:action.baseURL+item.image})});
            return state.concat(newPayload);
        default:
            return state;
    }
}