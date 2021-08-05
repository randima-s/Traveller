import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";
import "firebase/analytics";
import "firebase/auth";

import { firebaseConfig } from "./config";

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}
else{
    firebase.app();
}

export const db = firebase.firestore();
export const storage=firebase.storage();
export const auth=firebase.auth();
export const timeStamp=()=>firebase.firestore.Timestamp.fromDate(new Date());