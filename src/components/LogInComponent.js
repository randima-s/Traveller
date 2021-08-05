import {useState} from "react";
import NewUserComponent from "./NewUserComponent";
import SignInComponent from "./SignInComponent";

function LogInComponent(props){
    const [state,setState]=useState("signin");


    return(
        <div className="container ">
            {state==="signin"&&<SignInComponent changeState={()=>setState("newuser")} updateUser={props.updateUser} />}
            {state==="newuser"&&<NewUserComponent changeState={()=>setState("signin")} updateUser={props.updateUser} />}
        </div>
    );
}


export default LogInComponent;