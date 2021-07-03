import { Component } from "react";
import GalleryItemComponent from "./GalleryItemComponent";
import {Breadcrumb} from "react-bootstrap";

class GalleryComponent extends Component{

    componentDidMount(){
        document.title="Traveller Gallery"
    }

    render(){
        const Items=this.props.images.map((image)=>{
            //console.log(image);
            return(
                <GalleryItemComponent image={image} key={image.id} />
            );
        })

        return (
            <div>
                <div className="container-fluid bg-light p-4">
                <Breadcrumb>
                <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                <Breadcrumb.Item active>Gallery</Breadcrumb.Item>
                </Breadcrumb>
                </div>
                <div className="row container-fluid p-4">
                    {Items}
                </div>
            </div>
        );
    };
}

export default GalleryComponent;