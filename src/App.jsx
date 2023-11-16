import React from 'react';
import ReactDOM from 'react-dom';
import {Routes,Route} from "react-router-dom";
 import Navbar from "./components/Navbar";
 import Cart from "./Pages/Cart";
 import Home from "./Pages/Home";

const App = () => {
 return(
  <div>

    {/* Navbar Creation */}
    <div><Navbar/></div>

    {/* Routes */}
<Routes>
<Route path="/" element={<Home/>}></Route>
  <Route path="/cart" element={<Cart/>}></Route>
</Routes>
  
  </div>
 )
 
};

export default App;    
