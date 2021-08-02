import { Component } from "react";
import {Switch,Route,withRouter} from "react-router-dom";
import {connect} from "react-redux";
import { addComment,fetchComments ,fetchBlogs,fetchImages,updateBlogs,addImage} from '../redux/ActionCreators';

import NavbarComponent from "./NavbarComponent";
import HomeComponent from "./HomeComponent";
import GalleryComponent from "./GalleryComponent";
import BlogComponent from "./BlogComponent";
import ContactComponent from "./ContactComponent";
import UploadComponent from "./UploadComponent";
import NewBlogComponent from "./NewBlogComponent";

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
    addComment:(comment,id,postId)=>dispatch(addComment(comment,id,postId)),
    fetchComments:()=>dispatch(fetchComments()),
    fetchBlogs:()=>dispatch(fetchBlogs()),
    fetchImages:()=>dispatch(fetchImages()),
    addImage:(image)=>dispatch(addImage(image)),
    updateBlogs:(newBlog)=>dispatch(updateBlogs(newBlog))
})

class MainComponent extends Component{
    
    componentDidMount(){
        this.props.fetchComments();
        this.props.fetchBlogs();
        this.props.fetchImages();
    }

    render(){

        const UploadImages=({match})=>{
            const blogId=match.params.id;
            return(<UploadComponent blogId={blogId} 
                blogData={this.props.blogs.blogs.filter((blog)=>blog.id===blogId)}
                images={this.props.images.images.filter((image)=>image.blogId===blogId)}
                addImage={this.props.addImage}/>);
        }

        return(
            <div>
                <NavbarComponent/>
                
                <Switch>
                    <Route exact path="/" component={()=><HomeComponent  />}></Route>
                    <Route exact path="/gallery" component={()=><GalleryComponent images={this.props.images.images}
                        isImagesLoading={this.props.images.isLoading} imageError={this.props.images.error}/>}></Route>
                    <Route exact path="/blog" component={()=><BlogComponent 
                        images={this.props.images.images}  isImagesLoading={this.props.images.isLoading} imageError={this.props.images.error}
                        blogs={this.props.blogs.blogs} isBlogLoading={this.props.blogs.isLoading} blogError={this.props.blogs.error}
                        comments={this.props.comments.comments} addComment={this.props.addComment} />}></Route>
                    <Route exact path="/contact" component={()=><ContactComponent/>}/>
                    <Route exact path="/newblog" component={()=><NewBlogComponent updateBlogs={this.props.updateBlogs}/>}/>
                    <Route  path="/upload:id" component={UploadImages}/>
                </Switch>
                
            </div>
        );
    };
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(MainComponent));