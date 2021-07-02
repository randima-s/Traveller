import {BLOGS} from "../shared/blogs";
import * as ActionTypes from "./ActionTypes";

export const Blogs=(state=BLOGS,action)=>{
    switch(action.type){
        default:
            return state;
    }
}