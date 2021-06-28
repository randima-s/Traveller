import { Component } from "react";
import NavbarComponent from "./NavbarComponent";
import CarouselComponent from "./CarouselComponent";

class MainComponent extends Component{

    render(){
        return(
            <div>
                <NavbarComponent/>
                <CarouselComponent/>
            </div>
        );
    };
}

export default MainComponent;