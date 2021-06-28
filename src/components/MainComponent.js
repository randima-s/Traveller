import { Component } from "react";
import NavbarComponent from "./NavbarComponent";
import HomeComponent from "./HomeComponent";
import FooterComponent from "./FooterComponent";

class MainComponent extends Component{

    render(){
        return(
            <div>
                <NavbarComponent/>
                <HomeComponent/>
                <FooterComponent/>
            </div>
        );
    };
}

export default MainComponent;