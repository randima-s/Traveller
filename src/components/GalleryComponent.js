import { Component } from "react";
import GalleryItemComponent from "./GalleryItemComponent";

class GalleryComponent extends Component{
    constructor(props){
        super(props);


    }



    render(){
        const Items=this.props.images.map((image)=>{
            console.log(image);
            return(
                <GalleryItemComponent image={image}  />
            );
        })

        return (
            <div>
                <div className="container-fluid bg-light p-4">
                    <h2>Welcome to the Gallery</h2>
                    <p>welcome</p>
                </div>
                <div className="row container-fluid p-4">
                    {Items}
                </div>
            </div>
        );
    };
}

export default GalleryComponent;