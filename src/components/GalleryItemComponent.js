import React from "react";
import {useState} from "react";
import ModalComponent from "./ModalComponent";
//import {Link} from "react-router-dom";
import {NavHashLink} from "react-router-hash-link";

function GalleryItemComponent(props){
    const [modalShow,setModalShow]=useState(false);
    const regExPatern=new RegExp("/(?!.*/.*)");
    return(
        <React.Fragment >
            <ModalComponent show={modalShow} modalHide={()=>setModalShow(false)}
            img={props.image.url}
            caption={props.image.caption}
            desc={props.image.desc}/>
        <div className="col-lg-3 col-md-3 col-sm-4 " id={props.image.id}>
            <div className="border border-primary border-2 mt-1 p-1 rounded-3">
            <img src={props.image.url.replace(regExPatern,"/small/")} alt={props.image.caption} className="w-100 rounded-3" onClick={()=>setModalShow(true)}></img>
            <span>{props.image.caption} </span>
            <NavHashLink to={"/blog/#"+props.image.postId}><span className="badge bg-primary text-center">post</span></NavHashLink>
            </div>
        </div>
        </React.Fragment>
    );
}

export default GalleryItemComponent;