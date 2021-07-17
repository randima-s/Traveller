import { Component } from "react";
import CarouselComponent from "./CarouselComponent";
import { NavHashLink  as Link }  from "react-router-hash-link";
import {baseURL} from "../shared/baseUrl";

class HomeComponent extends Component{

    componentDidMount(){
        //this.props.fetchData();
        document.title="Traveller Home";
    }


    render(){

        const QuoteText=(
            <div >
                <h2 className="fst-italic">“The world is a book and those who do not travel read only one page.”</h2>
                <p className="text-end">Saint Augustine</p>
            </div>
        );

        return(
            <div className="container py-2  " >
                <div className="row m-0 ">
                    <div className="col-md-7 p-0">
                    <CarouselComponent images={this.props.carousel}/>
                    </div>
                    <div className=" col-md-5 bg-dark text-light">
                        <div className="d-flex p-4  align-items-center h-100">
                            {QuoteText}
                        </div>
                    </div>
                </div>
                <Link to="/blog#top">
                <div className="container aspect-ratio-box my-2 position-relative" style={{
                    backgroundImage:`url('\\${baseURL}/assets/img/blog.jpg')`}}>
                        <div className="aspect-ratio-box-inside">
                            <h2 className="m-4 text-light text-end">Blog</h2>
                            <p className="m-4 text-end text-light d-none d-sm-block">A visual blog of amazing places</p>
                    </div>
                </div>
                </Link>
                <Link to="/gallery#top">
                <div className="container aspect-ratio-box my-2 position-relative" style={{
                    backgroundImage:`url('\\${baseURL}/assets/img/gallery.jpg')`}}>
                        <div className="aspect-ratio-box-inside">
                            <h2 className="m-4 text-light text-end">Gallery</h2>
                            <p className="m-4 text-end text-light d-none d-sm-block">The collection of all photos</p>
                    </div>
                </div>
                </Link>
            </div>
        );
    };
    
}

export default HomeComponent;