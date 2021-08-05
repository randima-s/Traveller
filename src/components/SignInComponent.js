import {baseURL} from "../shared/baseUrl";
import {useState,useEffect} from "react";
import { useHistory } from "react-router";

import {signIn} from "../firebase/auth";

function SignInComponent(props){

    const [userEmail,setUserEmail]=useState("abc@def.com");
    const [userEmailError,setUserEmailError]=useState(null);
    const [passWord,setPassWord]=useState("");
    const [passWordError,setPassWordError]=useState(null);
    const [loginError,setLoginError]=useState(null);
    //const history=useHistory();

    const handleChange=(event)=>{
        const target=event.target;
        switch(target.id){
            case "userEmail":
                setUserEmail(target.value);
                setUserEmailError(target.value.length<4?"Name must be at least 4 charaters long":null);
                break;
            case "passWord":
                setPassWord(target.value);
                setPassWordError(target.value.length<8?"Password must be at least 8 charaters long":null);
                break;
        }
    }

    const handleSubmit=(event)=>{
        if(!userEmailError && !passWordError ){
            //console.log(userEmail,passWord);
            signIn(userEmail,passWord)
            .then((user)=>{
                console.log(user);
                //history.push("/");
            })
            .catch((error)=>{
                setLoginError(error);
            });
        }
        event.preventDefault();
    }

    return(
        <div>
            <div className="row justify-content-center align-items-center"  style={{height:"80vh"}}>
                <div className="col-12 col-md-6 col-lg-4">
                    <img src={baseURL+"/assets/img/logo.png"} alt="Traveller"/>
                    <h2 className="text-center mb-4">Sign In</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-2">
                            <label className="form-label">Email</label>
                            <input type="email" className="form-control" id="userEmail" placeholder="abc@def.com" value={userEmail} onChange={handleChange}/>
                            {userEmailError&& <p className="text-danger">{userEmailError}</p>}
                        </div>
                        <div className="mb-2">
                            <label className="form-label">Password</label>
                            <input type="password" className="form-control" id="passWord" placeholder="" value={passWord} onChange={handleChange}/>
                            {passWordError&& <p className="text-danger">{passWordError}</p>}
                        </div>
                        {loginError && <div className="mb-2 text-danger">{loginError}</div>}
                        <div >
                            <button type="submit" className="btn btn-primary w-100 ">Sign In</button>
                        </div>
                    </form>

                    <hr/>
                    <div>
                        New User <span className="text-primary" style={{cursor:"pointer"}} onClick={()=>props.changeState()}>Create Account</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignInComponent;