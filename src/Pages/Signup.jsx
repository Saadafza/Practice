import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
function Signup(){

const [name, setName]=useState("")
const [email, setEmail]=useState("")
const [password, setPassword]= useState("")
const navigate =useNavigate()

const handlesubmit=()=>{
 axios.post("https://backend-self-delta.vercel.app/api/registration",{
    name,
    email,
    password
 })
.then(res=>{
  if(res.data.status === true){
navigate("/")
  }else{
    alert(res.data.msg)
  }
})


}

    return(
        <>
         <div className="container">
            <h3 className="card-header bg-primary p-3 text-center text-light"> REGISTRATION FOR NEW USEER</h3>
            <label>
                Enter Your Name
            </label><br></br>
            <input className="signupinput" onChange={(e)=>{setName(e.target.value)}} type="text" placeholder="Enter your name"/><br></br>
            <label>
                Enter Your Email
            </label><br></br>
            <input  className="signupinput" onChange={(e)=>{setEmail(e.target.value)}} type="email" placeholder="Enter your email"/><br></br>
            <label>
                Enter Your Password
            </label><br></br>
            <input  className="signupinput" onChange={(e)=>{setPassword(e.target.value)}} type="password" placeholder="Enter your password"/><br></br>
   <button className="btn btn-primary text-center" onClick={handlesubmit}>Submit</button>
         </div>



        </>
    )
}
export default Signup