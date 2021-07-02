import { Component } from "react";
import NavbarComponent from "./NavbarComponent";
import HomeComponent from "./HomeComponent";
import FooterComponent from "./FooterComponent";
import GalleryComponent from "./GalleryComponent";
import BlogComponent from "./BlogComponent";
import ContactComponent from "./ContactComponent";

import {Switch,Route,Redirect,withRouter} from "react-router-dom";
import {connect} from "react-redux";


const mapStateToProps = state => {
    return {
        images:state.images,
        carousel:state.carousel,
        explore:state.explore,
        blogs:state.blogs,
        comments:state.comments
    }
}

class MainComponent extends Component{
    constructor(props){
        super(props);

        /*this.state={
            images:IMAGES,
            carousel:CAROUSELDATA,
            explore:EXPLORE,
            blogs:BLOGS,
            comments:COMMENTS
        }*/
    }

    render(){
        return(
            <div>
                <NavbarComponent/>
                <Switch>
                    <Route path="/home" component={()=><HomeComponent carousel={this.props.carousel} explore={this.props.explore}/>}></Route>
                    <Route path="/gallery" component={()=><GalleryComponent images={this.props.images}/>}></Route>
                    <Route path="/blog" component={()=><BlogComponent images={this.props.images} blogs={this.props.blogs} comments={this.props.comments}/>}></Route>
                    <Route path="/contact" component={()=><ContactComponent/>}/>
                    <Redirect to="/home"></Redirect>
                </Switch>
                <FooterComponent/>
            </div>
        );
    };
}

export default withRouter(connect(mapStateToProps)(MainComponent));