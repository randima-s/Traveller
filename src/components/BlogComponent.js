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
            <div >
                
                <div className="container bg-black p-4 position-relative">
               
                <ol className="breadcrumb ">
                <li className="breadcrumb-item" ><Link to="/" className="text-light">Home</Link></li>
                <li className="breadcrumb-item active text-light">Blog</li>
                </ol>
                
                </div>
                
                <div >
                
                <div className="row justify-content-lg-center justify-content-md-center " >
                <div className="col col-xl-4 col-lg-5 col-md-6 col-sm-12  text-light position-relative">
                <div className="sidebar  ">
                    <ul className="list-group list-group-horizontal ">
                        <li className="list-group-item bg-dark "><Link className="text-light" to="/#top">Home</Link></li>
                        <li className="list-group-item bg-dark text-light" onClick={()=>{window.scrollTo(0,0)}}>Top</li>
                    </ul>
                </div>
                {Items}
                </div>
                </div>
                </div>
            </div>
        );
    };
}

export default BlogComponent;