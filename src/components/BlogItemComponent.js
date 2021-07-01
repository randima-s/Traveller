 function BlogItemComponent(props){

    const miniImages=props.images.map((image)=>{
        return(
            <div className="col col-lg-4 col-md-4">
            <img src={image.url} className="w-100 "></img>
            </div>
        );
    });

    const featuredImg=props.images.filter((image)=>image.isFeatured===true)[0];

     return(
         <div className="row justify-content-lg-center my-2 " id={props.blogData.id}>
         <div className="col col-lg-6 col-md-6 bg-light border border-primary">
             <h4>{props.blogData.title}</h4>
             <img src={featuredImg.url} className="w-100 "></img>
             <div className="row ">
                 {miniImages}
             </div>
             <div>
                 {props.blogData.desc} 
             </div>
             <div>
                 Comments 
             </div>
         </div>
         </div>
     );
 }

 export default BlogItemComponent;