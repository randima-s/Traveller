import { Component } from "react";
import NavbarComponent from "./NavbarComponent";
import HomeComponent from "./HomeComponent";
import FooterComponent from "./FooterComponent";
import GalleryComponent from "./GalleryComponent";
import BlogComponent from "./BlogComponent";

import {Switch,Route,Redirect} from "react-router-dom";

import {IMAGES} from "../shared/images";
import {CAROUSELDATA} from "../shared/carouseldata";
import {EXPLORE} from "../shared/explore";
import {BLOGS} from "../shared/blogs";

class MainComponent extends Component{
    constructor(props){
        super(props);

        this.state={
            images:IMAGES,
            carousel:CAROUSELDATA,
            explore:EXPLORE,
            blogs:BLOGS
        }
    }

    render(){
        return(
            <div>
                <NavbarComponent/>
                <Switch>
                    <Route path="/home" component={()=><HomeComponent carousel={this.state.carousel} explore={this.state.explore}/>}></Route>
                    <Route path="/gallery" component={()=><GalleryComponent images={this.state.images}/>}></Route>
                    <Route path="/blog" component={()=><BlogComponent images={this.state.images} blogs={this.state.blogs}/>}></Route>
                    <Redirect to="/home"></Redirect>
                </Switch>
                <FooterComponent/>
            </div>
        );
    };
}

export default MainComponent;