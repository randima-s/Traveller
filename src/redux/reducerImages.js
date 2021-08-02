
import * as ActionTypes from "./ActionTypes";

export const Images=(state={images:[],isLoading:true,error:null},action)=>{
    switch(action.type){
        case ActionTypes.LOADING_IMAGES:
            return{...state,isLoading:true,error:null};
        case ActionTypes.ADD_IMAGE:
            return {...state,images:state.images.concat(action.payload),isLoading:false,error:null};
        case ActionTypes.LOAD_IMAGES:
            return {...state,images:action.payload,isLoading:false,error:null};
        case ActionTypes.ERROR_IMAGES:
            return{...state,isLoading:false,error:action.payload};
        default:
            return state;
    }
}