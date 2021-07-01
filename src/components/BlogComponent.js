import {Component} from "react"
import BlogItemComponent from "./BlogItemComponent";

class BlogComponent extends Component{

    constructor(props){
        super(props);
    }


    render(){

        const Items=this.props.blogs.map((blog=>{
            return <BlogItemComponent 
            blogData={blog}
            images={this.props.images.filter((image)=>image.postId===blog.id)}/>
        }));

        return(
            <div>
                <div className="container-fluid bg-light p-4">
                    <h2>Welcome to the Time Line</h2>
                    <p>welcome</p>
                </div>
                <div >
                    {Items}
                </div>
            </div>
        );
    };
}

export default BlogComponent;