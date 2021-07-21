
import * as ActionTypes from "./ActionTypes";

export const CarouselData=(state=[],action)=>{
    switch(action.type){
        case ActionTypes.LOAD_CAROUSEL:

            //let newPayload=action.payload[1].map((item)=>{
            //    console.log(item);
            //});
            let newPayload=action.payload.map((item)=>({...item,img:action.baseURL+item.img}));
            //console.log(action.payload);
            //state.concat(action.payload);
            return state.concat(newPayload);
        default:
            return state;
    }
}