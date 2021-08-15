import React from "react";
import {useState} from "react";
import ModalComponent from "./ModalComponent";
import {NavHashLink} from "react-router-hash-link";

function GalleryItemComponent(props){
    const [modalShow,setModalShow]=useState(false);
    return(
        <React.Fragment >
            <ModalComponent show={modalShow} modalHide={()=>setModalShow(false)}
            img={props.image.url}
            caption={props.image.caption}
            desc={props.image.desc}/>
            <div className="col-lg-3 col-md-3 col-sm-4 position-relative flex-item" id={props.image.id}>
                <div className=" gallery-item  text-light  ">
                    <img src={props.image.url} alt={props.image.caption} className="gallery-image " onClick={()=>setModalShow(true)}></img>
                    <div className="gallery-item-title position-absolute  end-0 top-0">
                        <span className="badge bg-light text-dark " >{props.image.caption}</span>
                        <NavHashLink to={"/blog/#"+props.image.blogId}>
                        <span className="badge bg-primary " >blog</span> 
                        </NavHashLink>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default GalleryItemComponent;