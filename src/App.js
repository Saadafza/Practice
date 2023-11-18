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
const [cart ,setCart]= useState([])

const addtocart = (food)=>{
const newarry = [...cart, food]
setCart(newarry)

}

console.log(cart)
  return (
    <div className="App">
      <Navbar cart={cart} setCart={setCart}/>
   <Routes>
    <Route path='/' element={<Home/>}/>
<Route path='/about' element={<About addtocart={addtocart}/>}/>
<Route path='/contactus' element={<Contactus  />}/>
<Route path='/detail/:id' element={<Detail/>}/>
<Route path='/blog' element={<Blog/>}/>
<Route path='*' element={<Notfound/>}/>
   </Routes>



    </div>
  );
}

export default App;
