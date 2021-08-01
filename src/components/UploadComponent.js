import react, { useEffect, useRef, useState } from "react";
import useStorage from "../firebase/useStorage";
import ProgressBarComponent from "./ProgressBarComponent";

function UploadComponent(props){

    const [file,setFile]=useState(null);
    const [error,setError]=useState(null);
    const {progress,url,uploadError}=useStorage(file,props.blogId,(image)=>props.addImage(image));
    const [imageList,setImageList]=useState([]);
    console.log(progress,url,uploadError)

    useEffect(()=>{
        document.title="Upload Images";
        setImageList(props.images);
    })

    useEffect(()=>{
        if(url){
            const newimage={
                caption:file.name,
                blogId:props.blogId,

            };
            setFile(null);
        }
    },[url]);

    const changeHandler=(e)=>{

        let selected=e.target.files[0]

        const types=["image/png","image/jpeg"];

        if(selected && types.includes(selected.type)){
            setFile(selected);
            setError(null);

            console.log("changed\n");
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
                <img src={image.url} alr={image.caption} className="w-100"/>
            </div>
            </div>
        );
    });



    return(
        <div className="container text-light">
            <h1 className="text-center">{props.blogData[0].title}</h1>
            <div className="row justify-content-center m-0">
                <div className="col-md-6 text-center">
                    {props.blogData[0].desc}
                </div>
            </div>
            <div className="row justify-content-center w-100 my-4">
            <form  className="col-sm-1" >
                <label className="bg-primary rounded  text-center fs-2 mb-2 w-100">
                    <input type="file" onChange={changeHandler} style={{display:"none"}}/>
                    <p className=" w-100" > + </p>
                </label>
            </form>
            <div >
                {error && <div className="error text-danger text-center ">{error}</div>}
                {file && <ProgressBarComponent progress={progress}/>}
            </div>
            </div>


            <div className="row bg-dark">
                {imageGrid}
            </div>
            
        </div>
    );
}

export default UploadComponent;

