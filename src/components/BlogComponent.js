import {Component} from "react"
import BlogItemComponent from "./BlogItemComponent";
import {Breadcrumb} from "react-bootstrap";
class BlogComponent extends Component{

    componentDidMount(){
        document.title="Traveller Blog"
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
                <Breadcrumb>
                <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                <Breadcrumb.Item active>Blog</Breadcrumb.Item>
                </Breadcrumb>
                </div>
                <div >
                    {Items}
                </div>
            </div>
        );
    };
}

export default BlogComponent;