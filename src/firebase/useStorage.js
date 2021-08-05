import {storage,db,timeStamp} from "./firebase";
import { useState,useEffect } from "react";
import {addData} from "./fireStore";

const useStorage=(file,blogId,addImage)=>{
    const [progress,setProgress]=useState(0);
    const [error,setError] =useState(null);
    const [url,setUrl]=useState(null);

    useEffect(()=>{
        if(file){
            const storageRef=storage.ref("images/"+file.name);
            //const fireStoreRef=db.collection("images");

            storageRef.put(file).on("state_change",
            (snap)=>{
                let progress=(snap.bytesTransferred/snap.totalBytes)*100;
                console.log(progress);
                setProgress(progress);
            },
            (err)=>{
                setError(error);
            },
            async ()=>{
                let url=await storageRef.getDownloadURL();

                const newImage={
                    url,
                    blogId:blogId,
                    caption:file.name};

                addData("images",newImage)
                .then((docRefId)=>{
                    console.log(docRefId);
                    newImage.id=docRefId;
                    addImage(newImage);
                })
                .catch((error)=>{
                    console.log(error);
                });
                /*fireStoreRef.add(newImage)
                .then((docRef)=>{
                    console.log(docRef);
                    newImage.id=docRef.id;
                    addImage(newImage);
                })
                .catch((error)=>{
                    console.log(error);
                });*/

                setUrl(url);
            });
        }
    }
    ,[file]);

    return {progress,url,error};

};

export default useStorage;