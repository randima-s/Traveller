import {storage} from "./firebase";

export const addImage=(file,blogId,callBack)=>{
    return new Promise((resolve,reject)=>{
        const storageRef=storage.ref("images/"+file.name);

        storageRef.put(file).on("state_change",
            (snap)=>{
                let progress=(snap.bytesTransferred/snap.totalBytes)*100;
                callBack(progress);
            },
            (err)=>{
                reject(err);
            },
            async ()=>{
                let url=await storageRef.getDownloadURL();
                resolve(url);
            }
        )
    });
}
