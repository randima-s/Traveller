import  { useRef, useState,useEffect } from "react";
import { useHistory,Link } from "react-router-dom";
import {db,timeStamp} from "../firebase/firebase";

function NewBlogComponent(props){

    const blogName=useRef(null);
    const blogDesc=useRef(null);
    const [error,setError]=useState(null);
    const history = useHistory();

    useEffect(()=>{
        document.title="New Blog";
    });

    const handleSubmit= (e)=>{
        if(blogName.current.value){
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
            })
            .catch((error)=>{
                alert("Error Adding Blog: "+error);
                console.log("Error Adding Blog: "+error);
            });

        }
        else{
            setError("Name cant be empty");
        }
        e.preventDefault();
    }

    return(
        <div className="container text-dark">

            <div className="container p-4 position-relative">
                <ol className="breadcrumb ">
                    <li className="breadcrumb-item" ><Link to="/" className="text-dark">Home</Link></li>
                    <li className="breadcrumb-item" ><Link to="/blog" className="text-dark">Blog</Link></li>
                    <li className="breadcrumb-item active text-dark">New Blog</li>
                </ol>
            </div>

            <h2 className="text-center mb-4">Create New Blog</h2>
            <form onSubmit={handleSubmit}>
                <div className="row mb-4">
                    <div className="col-sm-2">
                        <label className="col-form-label">Blog Name</label>
                    </div>
                    <div className="col-sm-5">
                        <input type="text" ref={blogName} id="blogName" className="form-control  text-dark" />
                        {error && <div className="  text-danger">{error}</div>}
                    </div>
                </div>
                <div className="row mb-4">
                    <div className="col-sm-2">
                        <label className="col-form-label">Content</label>
                    </div>
                    <div className="col-sm-10">
                        <textarea type="text" ref={blogDesc} id="blogName" className="form-control  text-dark" rows={7} />
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