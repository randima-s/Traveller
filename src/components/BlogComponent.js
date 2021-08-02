import {Component} from "react"
import BlogItemComponent from "./BlogItemComponent";
import {Link} from "react-router-dom";

class BlogComponent extends Component{

    componentDidMount(){
        document.title="Traveller Blog";
    }

    render(){

        if(this.props.isBlogLoading || this.props.isImagesLoading){
            return(
                <div className="text-dark text-center">
                    <div className="spinner-border text-primary" role="status">
                    </div>
                    <br/>
                     Blogs are Loading ...
                </div>
            );
        }
        else if(this.props.blogError){
            return(
                <div className="text-danger">
                    Error :{this.props.blogError}
                </div>
            );
        }
        else if(this.props.imageError){
            return(
                <div className="text-danger">
                    Error :{this.props.blogError}
                </div>
            );
        }
        else{
            const Items=this.props.blogs.map((blog=>{
                return (
                    <BlogItemComponent 
                    key={blog.id}
                    blogData={blog}
                    images={this.props.images.filter((image)=>image.blogId===blog.id)}
                    comments={this.props.comments.filter((comment)=>comment.postId===blog.id)}
                    addComment={this.props.addComment}/>
                );
            }));
    
            return(
                <div >
                    
                    <div className="container p-4 position-relative">
                        <ol className="breadcrumb ">
                            <li className="breadcrumb-item" ><Link to="/" className="text-dark">Home</Link></li>
                            <li className="breadcrumb-item active text-dark">Blog</li>
                        </ol>
                    </div>
                    
                    <div >
                        <div className="row justify-content-lg-center justify-content-md-center " >
                            <div className="col col-xl-4 col-lg-5 col-md-6 col-sm-12 dark position-relative">
                                <div className="sidebar  ">
                                    <ul className="list-group list-group-horizontal ">
                                        <li className="list-group-item bg-dark "><Link className="text-light" to="/#top">Home</Link></li>
                                        <li className="list-group-item bg-dark text-light" onClick={()=>{window.scrollTo(0,0)}}>Top</li>
                                    </ul>
                                </div>
    
                                <div  className="row mx-0 my-4 p-2 blog-item rounded justify-content-center ">   
                                    <div className=" col-auto plus-sign fs-2 text-center"><Link to="/newblog" >+</Link></div>
                                    <Link to="/newblog" >
                                    <p className="text-center mt-2" >Create New Blog</p>
                                    </Link>
                                </div>
    
                                {Items}
                                
                            </div>
                        </div>
                    </div>
                </div>
            );
        }

    };
}

export default BlogComponent;