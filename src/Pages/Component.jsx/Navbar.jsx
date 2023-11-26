import axios from "axios"
import { useState } from "react"
import { Link } from "react-router-dom"
function Navbar(props){

const deleteitem = (index)=>{
const updatecart = [...props.cart]
updatecart.splice(index,1 )
props.setCart(updatecart)
}
const additem=(index)=>{
const updatecart =[...props.cart]
  updatecart[index].quantity +=1
  props.setCart(updatecart)
}

const minusitem = (index) =>{
  const updatecart= [...props.cart]
  if(updatecart[index].quantity > 1){
    updatecart[index].quantity -= 1
    props.setCart(updatecart)
  }
}


    return(
        <>
        <div className="container">
        <nav className="navbar navbar-expand-lg  " >
  <div className="container-fluid">
    <a className="navbar-brand text-light" href="#">Navbar</a>
    <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav mx-auto ">
        <li className="nav-item">
          <Link className="nav-link  " aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contactus">Contact us</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link "  to="/blog">Blog</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link "  to="/detail">Detail</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link "  to="/logout">Logout</Link>
        </li>
      </ul>
      <ul className="navbar-nav ms-auto ">
      <li className="nav-item ms-auto" >
          <Link className="nav-link position-relative "  type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><i class="ri-shopping-cart-2-fill"></i>
          <span class="position-absolute top-1 start-100 translate-middle badge rounded-pill bg-danger">
    {props.cart.length}
    <span class="visually-hidden">unread messages</span>
  </span>
          </Link>
        </li>
      </ul>

    </div>
  </div>
</nav>
        </div>



<div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
  <div class="offcanvas-header">
    <h5 id="offcanvasRightLabel">Offcanvas right</h5>
    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
   {
    props.cart.map(( food ,index)=>{
   return(
    <>
    <ul>
      <li className="d-flex justify-content-between align-items-center">
       <img src={food.url} alt={food.title} width="50px" />
       <span className="text-danger">${food.price * food.quantity}</span>
       <span>{food.title}</span>
       <i className="ri-delete-bin-line " onClick={()=>{deleteitem(index)}}></i>
       <div >
        <i className="ri-file-add-fill" onClick={()=>{additem(index)}}></i>
       {food.quantity}
       <i className="ri-subtract-line mx-2" onClick={()=>{minusitem(index)}}></i>
       </div>
       
       
      </li>
    </ul>
    </>
   )
    })
   }
   {
    props.cart.map((food , index)=>{
      return(
        <>
        
        </>
      )
    })
   }
  </div>
</div>

        </>
    )
}
export default Navbar