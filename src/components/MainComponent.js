import { Component } from "react";
import {Switch,Route,withRouter, Redirect} from "react-router-dom";
import {connect} from "react-redux";
import { updateComments,fetchComments ,fetchBlogs,fetchImages,updateBlogs,addImage,updateUser} from '../redux/ActionCreators';

import NavbarComponent from "./NavbarComponent";
import HomeComponent from "./HomeComponent";
import GalleryComponent from "./GalleryComponent";
import BlogComponent from "./BlogComponent";
import ContactComponent from "./ContactComponent";
import UploadComponent from "./UploadComponent";
import NewBlogComponent from "./NewBlogComponent";
import LogInComponent from "./LogInComponent";

const mapStateToProps = state => {
    return {
        images:state.images,
        blogs:state.blogs,
        comments:state.comments,
        user:state.user
    }
}

const mapDispatchToProps=dispatch=>({
    updateComments:(comment)=>dispatch(updateComments(comment)),
    fetchComments:()=>dispatch(fetchComments()),
    fetchBlogs:()=>dispatch(fetchBlogs()),
    fetchImages:()=>dispatch(fetchImages()),
    addImage:(image)=>dispatch(addImage(image)),
    updateBlogs:(newBlog)=>dispatch(updateBlogs(newBlog)),
    updateUser:(user)=>dispatch(updateUser(user))
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
                addImage={this.props.addImage}
                user={this.props.user}/>);
        }

        return(
            <div>
                <NavbarComponent user={this.props.user}/>
                
                <Switch>
                    <Route exact path="/" component={()=><HomeComponent  />}></Route>
                    <Route exact path="/gallery" component={()=><GalleryComponent images={this.props.images.images}
                        isImagesLoading={this.props.images.isLoading} imageError={this.props.images.error}/>}></Route>
                    <Route exact path="/blog" component={()=><BlogComponent 
                        images={this.props.images.images}  isImagesLoading={this.props.images.isLoading} imageError={this.props.images.error}
                        blogs={this.props.blogs.blogs} isBlogLoading={this.props.blogs.isLoading} blogError={this.props.blogs.error}
                        comments={this.props.comments.comments} updateComments={this.props.updateComments}
                        user={this.props.user} />}></Route>
                    <Route exact path="/contact" component={()=><ContactComponent/>}/>
                    <Route exact path="/newblog" component={()=><NewBlogComponent updateBlogs={this.props.updateBlogs} user={this.props.user}/>}/>
                    <Route  path="/upload:id" component={UploadImages}/>
                    {this.props.user.isLoggedIn?<Redirect to="/"></Redirect>:<Route path="/login" component={()=><LogInComponent  />}/>}
                </Switch>
                
            </div>
        );
    };
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(MainComponent));