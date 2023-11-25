import axios from "axios"
import { useState } from "react"
import { Link } from "react-router-dom"
function Navbar(props){










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
      props.cart.map((item)=>{
        return(
          <>
          <ul>

            <li>
              {item.title}
            </li>
          </ul>
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