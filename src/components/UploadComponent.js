import  { useEffect, useState } from "react";
import {addImage} from "../firebase/useStorage";
import {addData} from "../firebase/fireStore";
import ProgressBarComponent from "./ProgressBarComponent";
import {Link} from "react-router-dom";

function UploadComponent(props){

    const [file,setFile]=useState(null);
    const [error,setError]=useState(null);
    const [progress,setProgress]=useState(0);
    const [imageList,setImageList]=useState(props.images);


    useEffect(()=>{
        document.title="Upload Images";
    })

    const changeHandler=(e)=>{

        let selected=e.target.files[0]

        const types=["image/png","image/jpeg"];

        if(selected && types.includes(selected.type)){
            setFile(selected);
            setError(null);
            addImage(selected,0,(progress)=>{
                console.log(progress);
                setProgress(progress);
            })
            .then((url)=>{
                const newImage={
                    url,
                    blogId:props.blogId,
                    caption:selected.name
                };

                addData("images",newImage)
                .then((docRefId)=>{
                    //console.log(docRefId);
                    newImage.id=docRefId;
                    props.addImage(newImage);
                })
                .catch((error)=>{
                    console.log(error);
                });
                setFile(null);
            })
            .catch((error)=>{
                console.log(error);
            })
        }
        else{
            setFile(null);
            setError("Please select an image of type .png, .jpeg");
        }
    }

    const imageGrid=imageList.map((image)=>{
        return(
            <div key={image.id} className="col-lg-3 col-md-4 col-sm-6 col-12"> 
                <div className="m-2">
                    <img src={image.url} alt={image.caption} className="w-100"/>
                </div>
            </div>
        );
    });



    return(
        <div className="container text-dark">
            <div className="container p-4 position-relative">
                <ol className="breadcrumb ">
                    <li className="breadcrumb-item" ><Link to="/" >Home</Link></li>
                    <li className="breadcrumb-item" ><Link to="/blog" >Blog</Link></li>
                    <li className="breadcrumb-item active ">{props.blogData[0].title}</li>
                </ol>
            </div>
            <h1 className="text-center">{props.blogData[0].title}</h1>
            <div className="row justify-content-center m-0">
                <div className="col-md-6 text-center">
                    {props.blogData[0].desc}
                </div>
            </div>
            <div className="row justify-content-center w-100 mx-0 my-4">
                <form  className="col-sm-1" >
                    {props.user.isLoggedIn?(
                        <label className=" fs-2 mb-2 w-100 d-flex justify-content-center">
                        <input type="file" onChange={changeHandler} style={{display:"none"}}/>
                        <div className="plus-sign fs-2 text-center ">+</div>
                        </label>
                    ):(
                        <div className="text-center  ">
                            <Link to="/login" className="text-primary">Sign In to add Photos</Link>
                        </div>
                    )}
                </form>
            <div >
                {error && <div className="error text-danger text-center ">{error}</div>}
                {file && <ProgressBarComponent progress={progress}/>}
            </div>
            </div>
            <div className="row ">
                {imageGrid}
            </div>
        </div>
    );
}

export default UploadComponent;
