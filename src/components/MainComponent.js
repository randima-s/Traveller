import { Component } from "react";
import NavbarComponent from "./NavbarComponent";
import HomeComponent from "./HomeComponent";
import FooterComponent from "./FooterComponent";
import GalleryComponent from "./GalleryComponent";
import BlogComponent from "./BlogComponent";
import ContactComponent from "./ContactComponent";

import {Switch,Route,Redirect,withRouter} from "react-router-dom";
import {connect} from "react-redux";

import { addComment,fetchComments ,fetchBlogs,fetchHome,fetchImages} from '../redux/ActionCreators';


const mapStateToProps = state => {
    return {
        images:state.images,
        carousel:state.carousel,
        explore:state.explore,
        blogs:state.blogs,
        comments:state.comments
    }
}

const mapDispatchToProps=dispatch=>({
    addComment:(comment,postId)=>dispatch(addComment(comment,postId)),
    fetchComments:()=>dispatch(fetchComments()),
    fetchBlogs:()=>dispatch(fetchBlogs()),
    fetchHome:()=>dispatch(fetchHome()),
    fetchImages:()=>dispatch(fetchImages())
})

class MainComponent extends Component{
    
    componentDidMount(){
        console.log("mounted");
        this.props.fetchHome();
        this.props.fetchComments();
        this.props.fetchBlogs();
        this.props.fetchImages();
        console.log("fetched");
    }

    render(){
        //console.log("Main rendered");
        //
        return(
            <div>
                <NavbarComponent/>
                <Switch>
                    <Route exact path="/" component={()=><HomeComponent carousel={this.props.carousel} explore={this.props.explore} />}></Route>
                    <Route exact path="/gallery" component={()=><GalleryComponent images={this.props.images}/>}></Route>
                    <Route exact path="/blog" component={()=><BlogComponent images={this.props.images} blogs={this.props.blogs.blogs} 
                    comments={this.props.comments.comments} addComment={this.props.addComment} />}></Route>
                    <Route exact path="/contact" component={()=><ContactComponent/>}/>
                    <Redirect to="/"></Redirect>
                </Switch>
                <FooterComponent/>
            </div>
        );
    };
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(MainComponent));