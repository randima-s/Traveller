import * as ActionTypes from "./ActionTypes";

//import {BLOGS} from "../shared/blogs";
//import {IMAGES} from "../shared/images";
//import {baseURL} from "../shared/baseUrl";

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
            console.log(doc.data());
            comments.push({
                id:doc.data().id,
                postId:doc.data().postId,
                comment:doc.data().comment,
                date:doc.data().date.seconds*1000
            })
        });
        dispatch(loadComments(comments));
    })
    .catch(error=>{
        console.log("Error: "+error);
    })
}

export const loadComments=comments=>{
    return({
        type:ActionTypes.LOAD_COMMENTS,
        payload:comments
    });
}

export const addComment=(comment,id,postId)=>dispatch=>{
    
    const newComment={
        id:id,
        postId:postId,
        comment:comment,
        date:firebase.firestore.Timestamp.fromDate(new Date())
    };

    db.collection("comments").add(newComment)
    .then((docRef)=>{
        dispatch(updateComments(newComment));
    })
    .catch((error)=>{
        alert("Error adding document: "+error);
        console.log("Error adding document: "+error);
        return false;
    });
    
}

export const updateComments=(comment)=>{
    return({
        type:ActionTypes.ADD_COMMENT,
        payload:comment
    });
}

/*export const loadComments=comments=>{
    return({
        type:ActionTypes.LOAD_COMMENTS,
        payload:comments
    });
}*/


/////////////////////////////////////////////////////////////
//Blogs

export const fetchBlogs=()=>dispatch=>{
    const blogs=[];
    db.collection("blogs").get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            console.log(doc.data());
            blogs.push({
                ...doc.data(),
                id:doc.id
            })
        });
        dispatch(loadBlogs(blogs));
    })
    .catch(error=>{
        console.log("Error: "+error);
    })
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
/////////////////////////////////
//Images

export const fetchImages=()=>dispatch=>{
    const images=[];
    db.collection("images").get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            console.log(doc.data());
            images.push({
                ...doc.data(),
                id:doc.id
            })
        });
        dispatch(loadImages(images));
    })
    .catch(error=>{
        console.log("Error: "+error);
    })
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



/*
export const fetchCarousel=()=>dispatch=>{

    const carousel=[];
    db.collection("carousel").get()
    .then((querySnapshot)=>{
        querySnapshot.forEach((doc)=>{
            carousel.push({
                id:doc.id,
                name:doc.data().name,
                desc:doc.data().desc,
                img:doc.data().img
            });
        });
        dispatch(addCarousel(carousel));
    })
    .catch((error)=>{
        console.log("Error: "+error);
    });
    
}

export const addCarousel=carousel=>{
    console.log("last");
    console.log(carousel);
    return({
        type:ActionTypes.LOAD_CAROUSEL,
        baseURL:baseURL,
        payload:carousel
    });
}
*/
