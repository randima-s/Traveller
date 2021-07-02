import * as ActionTypes from "./ActionTypes";

import {COMMENTS} from "../shared/comments";
import {BLOGS} from "../shared/blogs";

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

export const loadBlogs=()=>{
    return({
        type:ActionTypes.LOAD_BLOGS,
        payload:BLOGS
    });
}