import {Component} from "react"
import BlogItemComponent from "./BlogItemComponent";
import {Link} from "react-router-dom";

class BlogComponent extends Component{

    componentDidMount(){
        document.title="Traveller Blog";
        //window.scrollTo(0, 0);
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
                <div className="container-fluid bg-light-dark p-4">
                <ol className="breadcrumb ">
                <li className="breadcrumb-item" ><Link to="/" className="text-light">Home</Link></li>
                <li className="breadcrumb-item active text-light">Blog</li>
                </ol>
                </div>
                <aside className="sidebar  ">
                    <ul className="list-group ">
                        <li className="list-group-item bg-dark "><Link className="text-light" to="/#top">Home</Link></li>
                        <li className="list-group-item bg-dark text-light" onClick={()=>{window.scrollTo(0,0)}}>Top</li>
                    </ul>
                </aside>
                <main>
                <div >
                {Items}
                </div>
                </main>
            </div>
        );
    };
}

export default BlogComponent;