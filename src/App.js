import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/Abouts';
import Contactus from './Pages/Contactus';
import Blog from './Pages/Blog';
import Navbar from './Pages/Component.jsx/Navbar';
import Detail from './Pages/Detail';
import { useState } from 'react';
import Home from './Pages/Home';
import Notfound from './Pages/Notfound';

function App() {
  const [name , setName]=useState("Bhuban")
const [cart, setCart]= useState([])
const [detail, setDetail]= useState("")

const addtocart = (food)=>{
  const newcart = [...cart , food]
  setCart(newcart)
}

console.log(cart)

const fooddetail = (food)=>{
setDetail(food)
}

console.log(detail)
  return (
    <div className="App">
      <Navbar cart={cart} />
   <Routes>
    <Route path='/' element={<Home/>}/>
<Route path='/about' element={<About name={name} addtocart={addtocart} fooddetail={fooddetail}  />}/>
<Route path='/contactus' element={<Contactus  />}/>
<Route path='/detail' element={<Detail   detail={detail}/>}/>
<Route path='/blog' element={<Blog/>}/>
<Route path='*' element={<Notfound/>}/>
   </Routes>



    </div>
  );
}

export default App;
