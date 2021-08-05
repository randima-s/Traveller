import {db} from "./firebase";
import {timeStamp} from "./firebase";

export const addData=(collection,data)=>{
    return new Promise((resolve,reject)=>{
        data.createdAt=timeStamp();
        db.collection(collection).add(data)
        .then((docRef)=>{
            resolve(docRef.id);
        })
        .catch((error)=>{
            reject(error);
        });
    });
}

export const readData=(collection)=>{
    return new Promise((resolve,reject)=>{
        db.collection(collection).get()
        .then((querySnapshot)=>{
            const data=[];
            querySnapshot.forEach((query)=>{
                data.push({
                    ...query.data(),
                    id:query.id
                });
            })
            resolve(data);
            //resolve(docRef.id);
        })
        .catch((error)=>{
            reject(error);
        });
    });
}