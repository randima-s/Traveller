import { Component } from "react";
import NavbarComponent from "./NavbarComponent";
import HomeComponent from "./HomeComponent";

class MainComponent extends Component{

    render(){
        return(
            <div>
                <NavbarComponent/>
                <HomeComponent/>
            </div>
        );
    };
}

export default MainComponent;