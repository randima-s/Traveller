import {createStore,combineReducers,applyMiddleware} from "redux";
import {Blogs} from "./reducerBlogs";
import {Comments} from "./reducerComments";
import {Images} from "./reducerImages";
import {User} from "./reducerUser";

import thunk from "redux-thunk";
import logger from "redux-logger";

/*export const ConfigureStore=()=>{
    const store=createStore(combineReducers({
        images:Images,
        blogs:Blogs,
        comments:Comments,
        user:User
    }),applyMiddleware(thunk,logger));
    return store;
}*/

export const store=createStore(combineReducers({
    images:Images,
    blogs:Blogs,
    comments:Comments,
    user:User
}),applyMiddleware(thunk,logger));