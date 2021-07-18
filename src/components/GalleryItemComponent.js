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
        <div className="col-lg-3 col-md-3 col-sm-4 position-relative mt-4" id={props.image.id}>
            <div className=" gallery-item  text-light mt-1 p-2 ">
            <img src={props.image.url.replace(regExPatern,"/small/")} alt={props.image.caption} className="w-100 rounded-3 mb-2" onClick={()=>setModalShow(true)}></img>
            <div className=" position-absolute  end-0 top-0"><span className="badge bg-dark " >{props.image.caption}</span>
            <NavHashLink to={"/blog/#"+props.image.postId}>
            <span className="badge bg-primary " >blog</span> 
            </NavHashLink>
            </div>
            </div>
        </div>
        </React.Fragment>
    );
}

export default GalleryItemComponent;