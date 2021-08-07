import { Component } from "react";
import GalleryItemComponent from "./GalleryItemComponent";
import {Link} from "react-router-dom";

class GalleryComponent extends Component{

    componentDidMount(){
        document.title="Traveller Gallery"
    }

    render(){
        if(this.props.isImagesLoading){
            return(
                <div className="text-dark text-center">
                    <div className="spinner-border text-primary" role="status">
                    </div>
                    <br/>
                     Images are Loading ...
                </div>
            );
        }
        else if(this.props.imageError){
            return(
                <div className="text-danger">
                    Error :{this.props.imageError}
                </div>
            );
        }
        else{
            const Items=this.props.images.map((image)=>{
                return(
                    <GalleryItemComponent image={image} key={image.id} />
                );
            })
    
            return (
                <div>
                    <div className="container p-4">
                    <ol className="breadcrumb text-dark">
                    <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                    <li className="breadcrumb-item active ">Gallery</li>
                    </ol>
                    </div>
                    <div className="container">
                    <div className="row  justify-content-center mb-4">
                        {Items}
                    </div>
                    </div>
                </div>
            );
        }

    };
}

export default GalleryComponent;