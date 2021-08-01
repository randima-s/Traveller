import react, { useEffect, useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import {db,timeStamp} from "../firebase/firebase";

function NewBlogComponent(props){

    const blogName=useRef(null);
    const blogDesc=useRef(null);
    const [error,setError]=useState(null);
    const history = useHistory();

    const handleSubmit= (e)=>{
        if(blogName.current.value){
            //console.log(blogName.current.value);
            //console.log(blogDesc.current.value);
            setError(null);

            const newBlog={
                title:blogName.current.value,
                desc:blogDesc.current.value,
                createdAt:timeStamp()
            };
        
            db.collection("blogs").add(newBlog)
            .then((docRef)=>{
                console.log(docRef.id);
                newBlog.id=docRef.id;
                props.updateBlogs(newBlog);
                history.push("/upload"+docRef.id);
                //return docRef.id;
                //dispatch(updateBlogs(newBlog));
            })
            .catch((error)=>{
                alert("Error Adding Blog: "+error);
                console.log("Error Adding Blog: "+error);
                //return null;
            });

            //const blogID=await props.addBlog(blogName.current.value,blogDesc.current.value);
            //console.log(blogID);
        }
        else{
            setError("Name cant be empty");
        }
        //history.push("/");
        e.preventDefault();
    }

    return(
        <div className="container text-light">
            <h2 className="text-center mb-4">Create New Blog</h2>
            <form onSubmit={handleSubmit}>
                <div className="row mb-2">
                    <div className="col-sm-2">
                        <label className="col-form-label">Blog Name</label>
                    </div>
                    <div className="col-sm-5">
                        <input type="text" ref={blogName} id="blogName" className="form-control bg-dark text-light" />
                        
                    {error && <div className="  text-danger">{error}</div>}
                    </div>
                </div>
                <div className="row mb-2">
                    <div className="col-sm-2">
                        <label className="col-form-label">Content</label>
                    </div>
                    <div className="col-sm-10">
                        <textarea type="text" ref={blogDesc} id="blogName" className="form-control bg-dark text-light" rows={5} />
                    </div>
                </div>
                <div className="row justify-content-end">
                    <div className="col-auto">
                        <button type="submit"  className="btn btn-primary align-end">Create</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default NewBlogComponent;