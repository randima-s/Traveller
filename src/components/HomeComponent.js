import { Component } from "react";
import CarouselComponent from "./CarouselComponent";
import {HomeBodyComponent} from "./HomeBodyComponent";


class HomeComponent extends Component{

    componentDidMount(){
        //this.props.fetchData();
        document.title="Traveller Home"
        window.addEventListener("scroll",this.handleScroll,true);
    }

    componentWillUnmount(){
        window.removeEventListener("scroll",this.handleScroll);
    }

    handleScroll=()=>{
        //console.log(window.scrollY);
    }

    render(){

        const QuoteText=(
            <div >
                <h2 className="fst-italic">“The world is a book and those who do not travel read only one page.”</h2>
                <p className="text-end">Saint Augustine</p>
            </div>
        );

        return(
            <div className="container py-2  " onScroll={this.handleScroll}>
                <div className="row ">
                    <h1 className="col-md-7">
                    <CarouselComponent images={this.props.carousel}/>
                    </h1>
                    <div className=" col-md-5 ">
                        <div className="d-flex p-4  align-items-center h-100">
                            {QuoteText}
                        </div>
                    </div>
                </div>
                <div style={{backgroundImage:"url('/assets/img/blog.jpg')",height:300,backgroundSize:'contain',backgroundRepeat:"no-repeat"}}>
                    <h2 className="m-4 text-light text-end">Blog</h2>
                    <p className="m-4 text-end text-light">"A visual blog of amazing places</p>
                </div>
                <HomeBodyComponent cards={this.props.explore}/>
            </div>
        );
    };
    
}

export default HomeComponent;