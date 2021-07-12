import { Component } from "react";
import CarouselComponent from "./CarouselComponent";
import {HomeBodyComponent} from "./HomeBodyComponent";


class HomeComponent extends Component{

    componentDidMount(){
        //this.props.fetchData();
        document.title="Traveller Home"
    }

    render(){

        const QuoteText=(
            <div >
                <h2 className="allign-middle">“The world is a book and those who do not travel read only one page.”</h2>
                <p>Saint Augustine</p>
            </div>
        );

        return(
            <div className="container-fluid m-0 p-2  ">
                <div className="row ">
                    <h1 className="col-md-6">
                    <CarouselComponent images={this.props.carousel}/>
                    </h1>
                    <div className=" col-md-6 ">
                        <div className="d-flex p-4  align-items-center h-100">
                            {QuoteText}
                        </div>
                    </div>
                </div>
                <HomeBodyComponent cards={this.props.explore}/>
            </div>
        );
    };
    
}

export default HomeComponent;