import React from "react";
import react,{useState} from "react";
import ModalComponent from "./ModalComponent";

function GalleryItemComponent(props){
    const [modalShow,setModalShow]=useState(false);
    const regExPatern=new RegExp("/(?!.*/.*)");
    return(
        <React.Fragment>
            <ModalComponent show={modalShow} modalHide={()=>setModalShow(false)}
            img={props.image.url}
            caption={props.image.caption}
            desc={props.image.desc}/>
        <div className="col-lg-2 col-md-2 col-sm-4 " id={props.image.id}>
            <div className="border border-primary border-2 mt-2 p-1 rounded-3">
            <img src={props.image.url.replace(regExPatern,"/small/")} className="w-100 rounded-3" onClick={()=>setModalShow(true)}></img>
            <p>{props.image.caption} <span className="badge bg-primary ">Post</span></p>
            </div>
        </div>
        </React.Fragment>
    );
}

export default GalleryItemComponent;