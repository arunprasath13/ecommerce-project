import React from "react";
import "../components/ProductCard/ProductCard.css";
import ProductCard from "../components/ProductCard/ProductCard";
import "./Product.css";
import Filter from "../components/filter/Filter";
import { useSelector } from "react-redux";
// import PriceFilter from "../components/filter/PriceFilter";
const Product = () => {
  const filteredProducts = useSelector(
    (state) => state.products.filteredProducts
  );

  return (
    <div className="products">
      <Filter />
      <ProductCard />
    </div>
  );
};

export default Product;
