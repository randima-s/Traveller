import {createStore,combineReducers,applyMiddleware} from "redux";
import {Blogs} from "./reducerBlogs";
import {Comments} from "./reducerComments";
import {Images} from "./reducerImages";

import thunk from "redux-thunk";
import logger from "redux-logger";

export const ConfigureStore=()=>{
    const store=createStore(combineReducers({
        images:Images,
        blogs:Blogs,
        comments:Comments
    }),applyMiddleware(thunk,logger));
    return store;
}