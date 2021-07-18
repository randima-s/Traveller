import React,{useState,useRef} from "react";
import {Form,Button} from "react-bootstrap";
import ModalComponent from "./ModalComponent";


 function BlogItemComponent(props){

    //const [newComment,setNewComment]=useState("");
    const featuredImg=props.images.filter((image)=>image.isFeatured===true)[0];

    const [modalShow,setModalShow]=useState(false);
    const [modalImgUrl,setModalImgUrl]=useState("");
    const [modalCaption,setModalCaption]=useState("");
    const [selectedImage,setSelectedImage]=useState(featuredImg.url);

    let newComment=React.createRef();
    const myRef= useRef(null);
    

    function handleSubmit(event){
        //console.log(newComment.current.value);
        if(newComment.current.value.length>0){
            props.addComment(newComment.current.value,props.blogData.id);
        }
        alert("Comments won't be stored permenantly");
        event.preventDefault();
    }




    function handleImageClick(imageID){
        const image=props.images.filter((image)=>image.id===imageID)[0];
        setSelectedImage(image.url);
        window.scrollTo(0,myRef.current.offsetTop);
        //setModalImgUrl(image.url);
        //setModalCaption(image.caption);
        //setModalShow(true);
    }

    function convertDate(date){
        const newDate=new Date(date);
        return(newDate.getHours()+":"+newDate.getMinutes()+" " +newDate.getFullYear()+"-"+newDate.getMonth()+"-"+newDate.getDate());
    }

    const miniImages=props.images.map((image)=>{
        const regExPatern=new RegExp("/(?!.*/.*)");
        //console.log(image.url.replace(regExPatern,"/small/"));
        return(
            <div className="col col-lg-4 col-md-4 col-sm-6 p-2 d-flex " key={image.id}>
            
            <img src={image.url.replace(regExPatern,"/small/")} alt={image.caption} className="w-100 align-self-center border border-dark"
            onClick={()=>handleImageClick(image.id)}></img>
            </div>
        );
    });

    const Comments=props.comments.map((comment)=>{
        return(
            <div className="shadow-sm p-2 mb-2 bg-light-dark rounded text-wrap"  key={comment.id}>
            {comment.comment}
            <p className="text-end p-0 m-0 text-secondary">{ convertDate(comment.date)}</p>
            </div>
        );
    });

    const Location=()=>{
        if(props.blogData.location===""){
            return(
                <div></div>
            );
        }
        else{
            return(
                <div className="my-2">
                 
                 <p className="text-end"><a href={props.blogData.location} target="_blank" rel="noopener noreferrer"><span>Location</span>
                 <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-geo-alt" viewBox="0 0 16 16">
                <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/>
                <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                </svg> </a>
                 </p>
                </div>
            );
        }
    }

    
    
     return(
        <div className="row justify-content-lg-center justify-content-md-center my-2 p-2" id={props.blogData.id} ref={myRef}>
         <div className="col col-xl-4 col-lg-5 col-md-6 col-sm-12 bg-dark text-light " >
             <h4 className="my-2 text-center">{props.blogData.title}</h4>
             <img src={selectedImage} alt={featuredImg.caption} className=" rounded px-2 mx-auto d-block" onClick={()=>handleImageClick(featuredImg.id)}
             style={{maxHeight:"60vh",width:"auto",maxWidth:"100%"}}></img>
             <div className="row px-2">
                 {miniImages}
             </div>
             <div>
                 {props.blogData.desc} 
             </div>
              <Location />
             <div>
                 <hr></hr>
                 {Comments}
                 <div className="mb-2">
                     <Form onSubmit={handleSubmit}>
                     <Form.Group >
                     <Form.Control type="text" placeholder="Add comment" as="textarea" rows={2} className="mb-2"
                      id="newComment" ref={newComment} className="bg-dark text-light"/>
                     </Form.Group>
                     <div className="d-flex flex-row-reverse mt-2">
                     <Button variant="secondary" type="submit" >
                        Post
                    </Button>
                     </div>
                     </Form>
                 </div>
             </div>
         <div>
        </div>
         <ModalComponent show={modalShow} modalHide={()=>setModalShow(false)}
           img={modalImgUrl} caption={modalCaption}/>
         </div>
         </div>
     );
 }

 export default BlogItemComponent;