import {createStore,combineReducers,applyMiddleware} from "redux";
import {Blogs} from "./reducerBlogs";
import {CarouselData} from "./reducerCasourelData";
import {Comments} from "./reducerComments";
import {Explore} from "./reducerExplore";
import {Images} from "./reducerImages";

import thunk from "redux-thunk";
import logger from "redux-logger";

export const ConfigureStore=()=>{
    const store=createStore(combineReducers({
        images:Images,
        carousel:CarouselData,
        explore:Explore,
        blogs:Blogs,
        comments:Comments
    }),applyMiddleware(thunk,logger));
    return store;
}