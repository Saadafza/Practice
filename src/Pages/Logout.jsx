import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Logout (){
    const navigate = useNavigate()
    useEffect(()=>{
        localStorage.removeItem("userId")
  navigate("/")
    },[])
    return(
        <>
        </>
    )
}
export default Logout;