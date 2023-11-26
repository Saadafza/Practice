import axios from "axios"
import { useEffect, useState } from "react"


function Detail (){
 const [detail, setDetail]= useState("")
 useEffect(()=>{
axios.get("https://backend-self-delta.vercel.app/api/food")
 },[])

    return(
        <>
<div className="container">
  
</div>


        </>
    )
}
export default Detail