import React,{useState,useRef} from "react";
import {Form,Button} from "react-bootstrap";
import { NavHashLink  as Link }  from "react-router-hash-link";
import firebase from "firebase/app";
import {addData} from "../firebase/fireStore";

 function BlogItemComponent(props){

    const featuredImg=props.images[0]||{caption:"",id:""};
    const [selectedImage,setSelectedImage]=useState(featuredImg.url);

    let newComment=React.createRef();
    const myRef= useRef(null);

    console.log(props.user.isLoggedIn);

    function handleSubmit(event){
        event.preventDefault();

        const newCommentJSON={
            postId:props.blogData.id,
            comment:newComment.current.value,
            user:props.user.user.displayName
        };
        addData("comments",newCommentJSON)
        .then((docRefId)=>{
            newCommentJSON.id=docRefId;
            props.updateComments(newCommentJSON);
        })
        .catch((error)=>{
            console.log(error);
        });
        /*if(newComment.current.value.length>0){
            props.addComment(newComment.current.value,props.blogData.id,props.user.user.displayName);
        }*/
    }

    function handleImageClick(imageID){
        const image=props.images.filter((image)=>image.id===imageID)[0];
        setSelectedImage(image.url);
        window.scrollTo(0,myRef.current.offsetTop);
    }

    function convertDate(date){
        const newDate=new Date(date.seconds*1000);
        const dateOptions={year:"numeric",month:"short",day:"numeric"};
        return(newDate.toLocaleTimeString("en-us") +", "+ newDate.toLocaleDateString("en-us",dateOptions));
    }

    const miniImages=props.images.map((image)=>{
        return(
            <div className="col col-lg-4 col-md-4 col-sm-6 p-2 d-flex mini-image" key={image.id} >
            <img src={image.url} alt={image.caption} className="w-100 align-self-center border border-dark"
            onClick={()=>handleImageClick(image.id)}></img>
            </div>
        );
    });

    const Comments=props.comments.map((comment)=>{
        return(
            <div className="shadow-sm p-2 mb-2 blog-comment rounded text-wrap"  key={comment.id}>
            <span className="fw-bold">{comment.user}</span><hr className="m-1"/>
            {comment.comment}
            <p className="text-end p-0 m-0 text-secondary">{ convertDate(comment.date || comment.createdAt)}</p>
            </div>
        );
    });
    
    
     return(
         <div className="my-4 p-2 blog-item" id={props.blogData.id} ref={myRef} >
             <h4 className="my-2 text-center">{props.blogData.title}</h4>
             <p className="text-center ">{props.blogData.user} , {convertDate(props.blogData.createdAt)}</p>
             <img src={selectedImage} alt={featuredImg.caption} className=" rounded px-2 mx-auto d-block mb-2" onClick={()=>handleImageClick(featuredImg.id)}
             style={{maxHeight:"60vh",width:"auto",maxWidth:"100%"}}></img>
             <div className="row px-2">
                 {miniImages}
                 <div className="col col-lg-4 col-md-4 col-sm-6 p-2 text-light position-relative blog-new-image" key={"new_image"} >
                    <Link to={"/upload"+props.blogData.id}>
                    <div className=" position-absolute top-50 start-50 translate-middle">
                        <div className="plus-sign fs-2 text-center">+</div>
                        <p className=" text-center fs-5">Image</p>
                    </div>
                    </Link>
                </div>
             </div>
             <div>
                 {props.blogData.desc} 
             </div>
             <div>
                 <hr></hr>
                 {Comments}
                 <div className="mb-2">
                     <Form onSubmit={handleSubmit}>
                     <Form.Group >
                     <Form.Control type="text" placeholder="Add comment" as="textarea" rows={2} disabled={!props.user.isLoggedIn}
                      id="newComment" ref={newComment} className="text-dark mb-2"/>
                     </Form.Group>
                     <div className="d-flex flex-row-reverse mt-2">
                        <Button variant="primary" type="submit" className="ms-2" disabled={!props.user.isLoggedIn}>
                            Post
                        </Button>
                        {!props.user.isLoggedIn?<Link to="/login" className="text-primary m-2">Sign In</Link>:null}
                     </div>
                     </Form>
                 </div>
             </div>
        </div>
     );
 }

 export default BlogItemComponent;
