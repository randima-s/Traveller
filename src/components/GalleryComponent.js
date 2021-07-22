import { Component } from "react";
import GalleryItemComponent from "./GalleryItemComponent";
import {Link} from "react-router-dom";

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
                <div className="container-fluid bg-black p-4">
                <ol className="breadcrumb">
                <li className="breadcrumb-item"><Link className="text-light" to="/">Home</Link></li>
                <li className="breadcrumb-item active text-light">Gallery</li>
                </ol>
                </div>
                <div className="container">
                <div className="row  justify-content-center">
                    {Items}
                </div>
                </div>
            </div>
        );
    };
}

export default GalleryComponent;