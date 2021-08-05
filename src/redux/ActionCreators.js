import * as ActionTypes from "./ActionTypes";

//firebase
import {db} from "../firebase/firebase";
import firebase from "firebase/app";

//////////////////////////////////////////////////////////
//Comments

export const fetchComments=()=>dispatch=>{
    const comments=[];
    db.collection("comments").get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            comments.push({
                ...doc.data(),
                id:doc.id
            })
        });
        dispatch(loadComments(comments));
    })
    .catch(error=>{
        console.log("Error: "+error);
    })
}

export const addComment=(comment,postId,user)=>dispatch=>{
    
    const newComment={
        postId:postId,
        comment:comment,
        user:user,
        date:firebase.firestore.Timestamp.fromDate(new Date())
    };

    db.collection("comments").add(newComment)
    .then((docRef)=>{
        newComment.id=docRef.id;
        dispatch(updateComments(newComment));
    })
    .catch((error)=>{
        console.log("Error adding document: "+error);
    });
    
}

export const loadComments=comments=>{
    return({
        type:ActionTypes.LOAD_COMMENTS,
        payload:comments
    });
}

export const updateComments=(comment)=>{
    return({
        type:ActionTypes.ADD_COMMENT,
        payload:comment
    });
}

/////////////////////////////////////////////////////////////
//Blogs

export const fetchBlogs=()=>dispatch=>{
    const blogs=[];
    dispatch(loadingBlogs());
    db.collection("blogs").get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            blogs.push({
                ...doc.data(),
                id:doc.id
            })
        });
        dispatch(loadBlogs(blogs));
    })
    .catch(error=>{
        console.log("Error: "+error);
        dispatch(errorBlogs(error));
    })
}

export const loadingBlogs=()=>{
    return({
        type:ActionTypes.LOADING_BLOG,
    });
}

export const loadBlogs=(blogs)=>{
    return({
        type:ActionTypes.LOAD_BLOGS,
        payload:blogs
    });
}

export const updateBlogs=(blog)=>{
    return({
        type:ActionTypes.ADD_BLOG,
        payload:blog
    });
}

export const errorBlogs=(error)=>{
    return({
        type:ActionTypes.ERROR_BLOG,
        payload:error
    });
}

/////////////////////////////////
//Images

export const fetchImages=()=>dispatch=>{
    const images=[];
    dispatch(loadingImages());
    db.collection("images").get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            images.push({
                ...doc.data(),
                id:doc.id
            })
        });
        dispatch(loadImages(images));
    })
    .catch(error=>{
        console.log("Error: "+error);
        dispatch(errorImages(error));
    })
}

export const loadingImages=()=>{
    return({
        type:ActionTypes.LOADING_IMAGES
    });
}

export const loadImages=(images)=>{
    return({
        type:ActionTypes.LOAD_IMAGES,
        payload:images
    });
}

export const addImage=(image)=>{
    return({
        type:ActionTypes.ADD_IMAGE,
        payload:image
    });
}

export const errorImages=(error)=>{
    return({
        type:ActionTypes.ERROR_IMAGES,
        payload:error
    });
}

//////////////////////////////////////////////////////////
//user

export const updateUser=(user)=>{
    return({
        type:ActionTypes.UPDATE_USER,
        payload:user
    });
}