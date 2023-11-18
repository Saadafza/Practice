import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"


function Detail (){
    const {id}= useParams()
    const [foodDetail, setFoodDetail]= useState([])

    useEffect(()=>{
axios.get(`https://backend-self-delta.vercel.app/api/getfoods/${id}`)
.then(res=>{
    setFoodDetail(res.data.food)
})

    },[])

    return(
        <>

   <div className="container">
    <div className="row">
        <div className="col-md-3">
            <img style={{width:"100%"}} src={foodDetail.url} alt="food-image"/>
        </div>
        <div className="col-md-6">
            <h1>{foodDetail.title}</h1>
            <p>{foodDetail.description}</p>
            <p className="text-danger">${foodDetail.price}</p>
        </div>
    </div>
   </div>


        </>
    )
}
export default Detail