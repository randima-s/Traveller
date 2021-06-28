import { Component } from "react";
import CarouselComponent from "./CarouselComponent";
import {Card} from "react-bootstrap";
import {LOCATIONS} from "../shared/locations";

function CardComponent(props){
    return(
        <Card >
        <Card.Img className="p-5" variant="top" src="https://img.icons8.com/doodle/96/000000/mask-snorkel--v1.png" />
        <Card.Body>
            <Card.Title className="text-center">{props.title}</Card.Title>
        </Card.Body>
        </Card>
    );
}

class HomeComponent extends Component{

    constructor(props){
        super(props);

        this.state={
            locations:LOCATIONS
        }
    }

    render(){
        return(
            <div className="container-fluid m-0 p-0 ">
                <div className="row">
                    <div className="col-md-6">
                    <CarouselComponent locations={this.state.locations}/>
                    </div>
                    <div className=" col-md-6 bg-light">
                        <div className="m-5 ">
                            <h2>“The world is a book and those who do not travel read only one page.”</h2>
                            <p>Saint Augustine</p>
                            <div className="row w-80">
                                <div className="col-lg-4">
                                    {CardComponent({title:"Blog"})}
                                </div>
                                <div className="col-lg-4">
                                    {CardComponent({title:"Blog"})}
                                </div>
                                <div className="col-lg-4">
                                    {CardComponent({title:"Blog"})}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
    
}

export default HomeComponent;