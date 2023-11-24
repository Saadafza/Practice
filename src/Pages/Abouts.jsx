import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

function About(props){
const [foods, setFoods]= useState([])
const [loading, setLoading]= useState(true)


useEffect(()=>{

axios.get("https://backend-self-delta.vercel.app/api/food")
.then(res=>{
    setFoods(res.data.data)
    setLoading(false)
  
})

},[])
    return(
        <>
        
        {
            loading ?(
<div className="spinner-border" role="status">
  <span className="visually-hidden">Loading...</span>
</div>
            ):(
                <div className="container" >
                <h3 className="card-header bg-primary text-light text-center p-2 rounded mt-3">ALL THE FOOD ITEM</h3>
                      
                        <div className="row">
                   


                     {
                        foods.map((food)=>{
                            return(
                                <>
                                <div className="col-md-3 mt-3">
                
                                <div className="card" >
                  <img src={food.url} style={{width:"100%" ,height:"200px"}} class="card-img-top" alt="..."/>
                  <div className="card-body">
                    <h5 className="card-title">{food.title}</h5>
                    <p className="card-text">{food.description}</p>
       <p>{props.name}</p>
                    <Link class="btn btn-primary" onClick={()=>{props.fooddetail(food)}} to="/detail"  >Detail Page</Link>
                    <button className="btn btn-danger" onClick={()=>{props.addtocart(food)}} >Add to cart</button>
                  </div>
                </div>
              
                                </div>
                              
                                </>
                            )
                        })
                     }
                </div>
                
                </div>
            )
        }


        </>
    )
}

export default About