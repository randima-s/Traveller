import { Component } from "react";
import { NavHashLink  as Link }  from "react-router-hash-link";
import {baseURL} from "../shared/baseUrl";

class HomeComponent extends Component{

    componentDidMount(){
        document.title="Traveller Home";
    }


    render(){

        const QuoteText=(
            <div >
                <h2 className="fst-italic">“The world is a book and those who do not travel read only one page.”</h2>
                <p className="text-end text-secondary">Saint Augustine</p>
            </div>
        );

        return(
            <div className="home-div container   d-flex" >
                <div className="row  ">
                    <div className="col-md-7 p-0  align-self-center">
                        <div className="  p-2  align-items-center h-100 ">
                        <img src={baseURL+"/assets/img/cover.png"} alt="cover" className="w-100"/>
                        </div>
                    </div>
                    <div className=" col-md-5  text-light d-flex align-self-center">
                        <div className=" p-4  align-items-center h-100">
                            {QuoteText}
                            <br/>
                            <Link to="/blog#top">
                            <p className="home-link mx-auto">Blog</p>
                            </Link>
                            <Link  to="/gallery#top">
                            <p className="home-link mx-auto">Gallery</p>
                            </Link>
                        </div>
                    </div>
                </div>
                
            </div>
            
            
        );
    };
    
}

export default HomeComponent;
