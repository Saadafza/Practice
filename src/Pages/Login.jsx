import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login(){
const [email, setEmail]= useState("")
const [password, setPassword]=useState("")
const navigate = useNavigate()

const handleLogin=()=>{
    axios.post("https://backend-self-delta.vercel.app/api/login",{
        email,
        password
    })
    .then(response=>{
        console.log(response.data)
 if(response.data.status === "true"){
    const token = response.data.token
    localStorage.setItem("userId",token)
navigate("/")
 }else{
    alert("the password not match")
 }
    })
}

    return(
        <>
 
        <div className="container">
            <h3 className="card-header text-light bg-primary p-2">LOGIN</h3>
            <input type="email" onChange={(e)=>{setEmail(e.target.value)}} placeholder="Enter your email"/>
            <input type=" password" onChange={(e)=>{setPassword(e.target.value)}} placeholder=" enter your password"/>
            <button className="btn btn-warning" onClick={handleLogin}>Login</button>
        </div>

        </>
    )
}
export default Login;