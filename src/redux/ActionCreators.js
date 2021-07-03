import * as ActionTypes from "./ActionTypes";

import {COMMENTS} from "../shared/comments";
import {BLOGS} from "../shared/blogs";
import {EXPLORE} from "../shared/explore";
import {CAROUSELDATA} from "../shared/carouseldata";
import {IMAGES} from "../shared/images";

import {baseURL} from "../shared/baseUrl";


export const fetchComments=()=>dispatch=>{
    //Need to implemet fetch
    dispatch(loadComments(COMMENTS));
}


export const addComment=(comment,postId)=>{
    //console.log("id"+postId);
    return({
        type:ActionTypes.ADD_COMMENT,
        payload:{comment:comment,
                postId:postId}
    });
}

export const loadComments=comments=>{
    return({
        type:ActionTypes.LOAD_COMMENTS,
        payload:comments
    });
}

export const fetchBlogs=()=>{
    return({
        type:ActionTypes.LOAD_BLOGS,
        payload:BLOGS
    });
}

export const fetchHome=()=>(dispatch)=>{
    dispatch(fetchExplore());
    dispatch(fetchCarousel());
}

export const fetchExplore=()=>{
    return({
        type:ActionTypes.LOAD_EXPLORE,
        baseURL:baseURL,
        payload:EXPLORE
    });
}

export const fetchCarousel=()=>{
    return({
        type:ActionTypes.LOAD_CAROUSEL,
        baseURL:baseURL,
        payload:CAROUSELDATA
    });
}

export const fetchImages=()=>{
    return({
        type:ActionTypes.LOAD_IMAGES,
        baseURL:baseURL,
        payload:IMAGES
    });
}