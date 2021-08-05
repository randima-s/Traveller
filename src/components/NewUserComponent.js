import {baseURL} from "../shared/baseUrl";
import {useState} from "react";

import {addUser,updateUserName} from "../firebase/auth";

function NewUserComponent(props){

    const [userName,setUserName]=useState("name");
    const [userNameError,setUserNameError]=useState(null);
    const [userEmail,setUserEmail]=useState("abc@def.com");
    const [userEmailError,setUserEmailError]=useState(null);
    const [passWord,setPassWord]=useState("");
    const [passWordError,setPassWordError]=useState(null);
    const [passWordVerify,setPassWordVerify]=useState("");
    const [passWordErrorVerify,setPassWordErrorVerify]=useState(null);
    const [accountError,setAccountError]=useState(null);

    const regexEmailPattern=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

    const handleChange=(event)=>{
        const target=event.target;
        switch(target.id){
            case "userName":
                setUserName(target.value);
                setUserNameError(target.value.length<4?"Name must be at least 4 charaters long":null);
                break;
            case "userEmail":
                setUserEmail(target.value);
                setUserEmailError(regexEmailPattern.test(target.value) ?null:"Invalid Email");
                break;
            case "passWord":
                setPassWord(target.value);
                setPassWordError(target.value.length<8?"Password must be at least 8 charaters long":null);
                setPassWordErrorVerify(passWordVerify===target.value?null:"Password should match");
                break;
            case "passWordVerify":
                setPassWordVerify(target.value);
                setPassWordErrorVerify(passWord===target.value?null:"Password should match");
                break;
            default:
                break;
        }
    }

    const handleSubmit=(event)=>{
        if(!userEmailError && !passWordError && !passWordErrorVerify){
            //console.log(userEmail,passWord);
            addUser(userEmail,passWord)
            .then(()=>{
                console.log("user");
                return updateUserName(userName);
            })
            .then((message)=>{
                console.log(message)
            })
            .catch((error)=>{
                setAccountError(error);
            });
        }
        event.preventDefault();
    }

    return(
        <div>
            <div className="row justify-content-center align-items-center"  style={{height:"80vh"}}>
                <div className="col-12 col-md-6 col-lg-4">
                    <img src={baseURL+"/assets/img/logoBlack.png"} alt="Traveller" className="w-100 p-4"/>
                    <h2 className="text-center mb-4">Create Account</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-2">
                            <label className="form-label">Name</label>
                            <input type="text" className="form-control" id="userName" placeholder="name" value={userName} onChange={handleChange}/>
                            {userNameError&& <p className="text-danger">{userNameError}</p>}
                        </div>
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
                        <div className="mb-4">
                            <label className="form-label">Re-enter Password</label>
                            <input type="password" className="form-control" id="passWordVerify" placeholder="" value={passWordVerify} onChange={handleChange}/>
                            {passWordErrorVerify && <p className="text-danger">{passWordErrorVerify}</p>}
                        </div>
                        {accountError && <div className="text-danger">{accountError}</div>}
                        <div >
                            <button type="submit" className="btn btn-primary w-100 " disabled={userEmailError || passWordError || passWordErrorVerify}>Create</button>
                        </div>
                        <hr/>
                        <div>
                            <span className="text-primary" style={{cursor:"pointer"}} onClick={()=>props.changeState()}>Sign In</span>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default NewUserComponent;