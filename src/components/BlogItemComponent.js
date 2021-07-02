import React,{useState} from "react";
import {Form,Button} from "react-bootstrap";
import ModalComponent from "./ModalComponent";


 function BlogItemComponent(props){

    const [newComment,setNewComment]=useState("");
    const [modalShow,setModalShow]=useState(false);
    const [modalImgUrl,setModalImgUrl]=useState("");
    const [modalCaption,setModalCaption]=useState("");

    const miniImages=props.images.map((image)=>{
        const regExPatern=new RegExp("/(?!.*/.*)");
        //console.log(image.url.replace(regExPatern,"/small/"));
        return(
            <div className="col col-lg-4 col-md-4 col-sm-6 p-2 d-flex " id={image.id}>
            
            <img src={image.url.replace(regExPatern,"/small/")} className="w-100 align-self-center border border-dark"
            onClick={()=>handleImageClick(image.id)}></img>
            </div>
        );
    });

    
    function handleSubmit(event){
        //console.log(event);
        event.preventDefault();
    }


    function handleInputChange(event){
        //console.log();
        setNewComment(event.target.value);
    }

    function handleImageClick(imageID){
        console.log(imageID);
        const image=props.images.filter((image)=>image.id===imageID)[0];
        setModalImgUrl(image.url);
        setModalCaption(image.caption);
        setModalShow(true);
    }

    const Comments=props.comments.map((comment)=>{
        return(
            <div className="shadow-sm p-2 mb-2 bg-body rounded" id={comment.id}>
            {comment.comment}
            <p className="text-end p-0 m-0 text-secondary">{comment.date}</p>
            </div>
        );
    });


    const featuredImg=props.images.filter((image)=>image.isFeatured===true)[0];

     return(
         <div className="row justify-content-lg-center justify-content-md-center my-2 p-2" id={props.blogData.id}>
         <div className="col col-lg-6 col-md-6 col-sm-12 bg-light border border-primary">
             <h4 className="my-2">{props.blogData.title}</h4>
             <img src={featuredImg.url} className="w-100 border border-dark" onClick={()=>handleImageClick(featuredImg.id)}></img>
             <div className="row ">
                 {miniImages}
             </div>
             <div>
                 {props.blogData.desc} 
             </div>
             <a href={props.blogData.location}><img src="assets/icons/map.png" alt="Location" className="d-block ms-auto my-1"></img></a>
             <div>
                 <hr></hr>
                 {Comments}
                 <div className="mb-2">
                     <Form onSubmit={handleSubmit}>
                     <Form.Group >
                     <Form.Control type="text" placeholder="Add comment" as="textarea" rows={2} className="mb-2"
                      id="newComment" onChange={handleInputChange} value={newComment}/>
                     </Form.Group>
                     <div className="d-flex flex-row-reverse ">
                     <Button variant="primary" type="submit" >
                        Post
                    </Button>
                     </div>
                     </Form>
                 </div>
             </div>
         </div>
         <div>
         <ModalComponent show={modalShow} modalHide={()=>setModalShow(false)}
           img={modalImgUrl} caption={modalCaption}/>
         </div>
         </div>
     );
 }

 export default BlogItemComponent;