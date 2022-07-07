import React,{useState} from "react";


const Login =()=>{
    const [user,setUser]=useState("");
    const [password,setPassword]=useState("");
    const [userErr,setUserErr]=useState(false);
    const [passErr,setPassErr]=useState(false);
    
    function formHandler(e){
        if(user.length<3 || password.length<3){
            alert("type correct values");
        }else{
            alert("all goods");
        }
        e.preventDefault();
    }

    return(
        <div>
            <h1>Login form</h1>
            <form onSubmit={formHandler}>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<label>UserId:</label>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type='text' placeholder="Enter User Id" onChange={(e)=>{
                const usr=e.target.value;
                if(usr.length<3){
                    setUserErr(true);
                }else{
                    setUserErr(false);
                }
                setUser(usr);
            }}/><br/>{userErr?<span style={{color:"red"}}>User Not valid</span>:null}<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<label>Password:</label>
                <input type='password' placeholder="Enter User Password" onChange={(e)=>{
                    const pass=e.target.value;
                    pass.length<3?setPassErr(true):setPassErr(false);
                    setPassword(pass);
                }}/><br/>{passErr?<span style={{color:"red"}}>Password Invalid!</span>:null}<br/>
                <button type="submit">Submit</button>
            </form>
            <h1>{user}</h1>
        </div>
    );
}

export default Login;