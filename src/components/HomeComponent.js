import { Component } from "react";
import CarouselComponent from "./CarouselComponent";
import HomeCardComponent from "./HomeCardComponent";
import {HomeBodyComponentBlog,HomeBodyComponentGallery} from "./HomeBodyComponent";
import {Card} from "react-bootstrap";
import {LOCATIONS} from "../shared/locations";
import {HOMETILES} from "../shared/hometiles";


function CardComponent(props){
    return(
        <div className="col-lg-4">
        <Card className="bg-primary" text="light" border="primary">
        <Card.Header className="text-center ">Blog</Card.Header>
        <Card.Img   src="/assets/img/1.jpg" id="HomeCardImg"/>
        </Card>
        </div>
    );
}



class HomeComponent extends Component{

    constructor(props){
        super(props);

        this.state={
            locations:LOCATIONS,
            hometiles:HOMETILES
        }
    }

    render(){

        const HomeTiles=this.state.hometiles.map((tile)=>{
            console.log(11);
            return(
                <div className="col-lg-4">
                <Card className={tile.color} text="light" border="primary">
                <Card.Header className="text-center ">{tile.title}</Card.Header>
                <Card.Img   src={tile.image} id="HomeCardImg"/>
                </Card>
                </div>
            );
        })

        const QuoteText=(
            <div>
                <h2>“The world is a book and those who do not travel read only one page.”</h2>
                <p>Saint Augustine</p>
            </div>
        );

        return(
            <div className="container-fluid m-0 p-0 ">
                <div className="row mx-1">
                    <div className="col-md-6">
                    <CarouselComponent locations={this.state.locations}/>
                    </div>
                    <div className=" col-md-6 ">
                        <div className="p-5 ">
                            {QuoteText}
                            <HomeCardComponent hometiles={this.state.hometiles}/>
                        </div>
                    </div>
                </div>
                <HomeBodyComponentBlog />
                <HomeBodyComponentGallery />
            </div>
        );
    };
    
}

export default HomeComponent;