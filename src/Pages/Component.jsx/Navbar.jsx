import { Link } from "react-router-dom"
function Navbar(props){



const addquantity = (index)=>{
  const updatedCart= [...props.cart]
    updatedCart[index].quantity += 1
    props.setCart(updatedCart)
  
}
const minusquantity = (index)=>{
  const updatedCart =[...props.cart]
  if(updatedCart[index].quantity > 1){
    updatedCart[index].quantity -=1
    props.setCart(updatedCart)
  }
}
    return(
        <>
        <div className="container">
        <nav className="navbar navbar-expand-lg  " >
  <div className="container-fluid">
    <a className="navbar-brand text-light" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
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
       
      </ul>
      <ul className="navbar-nav ms-auto ">
      <li className="nav-item ms-auto">
          <Link className="nav-link position-relative " data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight" ><i class="ri-shopping-cart-2-fill"></i>
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

{/* <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
  <div class="offcanvas-header">
    <h5 id="offcanvasRightLabel">Cart</h5>
    <button type="button" style={{border:"none", backgroundColor:"none"}} class="text-reset" data-bs-dismiss="offcanvas" aria-label="Close"><i class="ri-arrow-left-line"></i></button>
  </div>
  <div class="offcanvas-body">
    {
      props.cart.map((cart,index)=>{
        return(
          <>
       <div className="d-flex justify-content-between align-items-center border-bottom mb-2">
        <div className="d-flex aling-items-center">
          <img src={cart.url} alt={cart.title} style={{width:"50px",height:"50px", marginRight:"10px"}}/>
          <span className=" p-2">{cart.title}</span>
          <span className="p-2">{cart.price * cart.quantity}</span>
        </div>
        <div className="d-flex align-items-center">
          <button
          className="btn btn-sm btn btn-outline-secondary mr-2"
          onClick={()=>{addquantity(index)}}

          >
    +
          </button>
     
        {cart.quantity}
          <button
          className="btn btn-sm btn btn-outline-secondary mr-2"
          onClick={()=>{minusquantity(index)}}

          >
    -
          </button>
        </div>
       </div>
          </>
        )
      })
    }
  </div>
</div> */}


        </>
    )
}
export default Navbar