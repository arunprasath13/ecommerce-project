import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import { Routes, Route } from "react-router-dom";
import Product from "./Pages/Product";
import Men from "./Pages/Men";
import Cart from "./Pages/Cart";
import Women from "./Pages/Women";
import Electronics from "./Pages/Electronics";
import Jwellery from "./Pages/Jwellery";
function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Product />} />
        <Route path="/mens" element={<Men />}/>
        <Route path="/cartpage" element={<Cart />}/>
        <Route path="/womens" element = {<Women/>} />
        <Route path="/electronics" element = {<Electronics />}/>
        <Route path="/jwellery" element={<Jwellery />}/>
      </Routes>
    </div>
  );
}

export default App;
