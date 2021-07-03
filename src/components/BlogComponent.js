import {Component} from "react"
import BlogItemComponent from "./BlogItemComponent";
import {Link} from "react-router-dom";

class BlogComponent extends Component{

    componentDidMount(){
        document.title="Traveller Blog";
        window.scrollTo(0, 0);
    }


    render(){

        const Items=this.props.blogs.map((blog=>{
            return <BlogItemComponent 
            key={blog.id}
            blogData={blog}
            images={this.props.images.filter((image)=>image.postId===blog.id)}
            comments={this.props.comments.filter((comment)=>comment.postId===blog.id)}
            addComment={this.props.addComment}/>
        }));

        return(
            <div>
                <div className="container-fluid bg-light p-4">
                <ol className="breadcrumb">
                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                <li className="breadcrumb-item active">Blog</li>
                </ol>
                </div>
                <div >
                    {Items}
                </div>
            </div>
        );
    };
}

export default BlogComponent;