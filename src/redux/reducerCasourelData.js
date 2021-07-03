
import * as ActionTypes from "./ActionTypes";

export const CarouselData=(state=[],action)=>{
    switch(action.type){
        case ActionTypes.LOAD_CAROUSEL:
            let newPayload=action.payload.map((item)=>({...item,image:action.baseURL+item.image}));
            return state.concat(newPayload);
        default:
            return state;
    }
}