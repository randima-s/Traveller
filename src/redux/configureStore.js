import {createStore,combineReducers} from "redux";
import {Blogs} from "./reducerBlogs";
import {CarouselData} from "./reducerCasourelData";
import {Comments} from "./reducerComments";
import {Explore} from "./reducerExplore";
import {Images} from "./reducerImages";

export const ConfigureStore=()=>{
    const store=createStore(combineReducers({
        images:Images,
        carousel:CarouselData,
        explore:Explore,
        blogs:Blogs,
        comments:Comments
    }));
    return store;
}