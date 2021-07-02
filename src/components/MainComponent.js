import { Component } from "react";
import NavbarComponent from "./NavbarComponent";
import HomeComponent from "./HomeComponent";
import FooterComponent from "./FooterComponent";
import GalleryComponent from "./GalleryComponent";
import BlogComponent from "./BlogComponent";
import ContactComponent from "./ContactComponent";

import {Switch,Route,Redirect,withRouter} from "react-router-dom";
import {connect} from "react-redux";

import { addComment,fetchComments ,loadBlogs} from '../redux/ActionCreators';


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
    loadBlogs:()=>dispatch(loadBlogs())
})

class MainComponent extends Component{

    componentDidMount(){
        this.props.fetchComments();
        this.props.loadBlogs();
    }

    render(){
        //console.log("Main rendered");
        return(
            <div>
                <NavbarComponent/>
                <Switch>
                    <Route exact path="/home" component={()=><HomeComponent carousel={this.props.carousel} explore={this.props.explore}/>}></Route>
                    <Route exact path="/gallery" component={()=><GalleryComponent images={this.props.images}/>}></Route>
                    <Route exact path="/blog" component={()=><BlogComponent images={this.props.images} blogs={this.props.blogs.blogs} 
                    comments={this.props.comments.comments} addComment={this.props.addComment} />}></Route>
                    <Route exact path="/contact" component={()=><ContactComponent/>}/>
                    <Redirect to="/home"></Redirect>
                </Switch>
                <FooterComponent/>
            </div>
        );
    };
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(MainComponent));