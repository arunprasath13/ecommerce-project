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
import DeliveryDetails from "./Pages/DeliveryDetails";
import PaymentDetails from "./Pages/PaymentDetails";
import Success from "./Pages/Success";
import Filter from "./components/filter/Filter";
import { useLocation } from "react-router-dom";
import Layout from "./Pages/Layout";
import HomePage from "./Pages/HomePage";

function App() {
  return (
    <div>
      <Header />

      <Routes>
        {/* <Route path="/" element={<Product />} /> */}
        <Route path="/" element={<HomePage />} />
        <Route path="/cartpage" element={<Cart />} />
        <Route path="/layout" element={<Layout />} />
        <Route path="/filteredProducts/:category" element={<Product />} />
      </Routes>
    </div>
  );
}

export default App;
