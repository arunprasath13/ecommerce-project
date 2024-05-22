// Layout.js

import React from "react";
import Filter from "../components/filter/Filter";
import ProductCard from "../components/ProductCard/ProductCard";
// import FilteredProductPage from "./FilteredProductPage";

const Layout = () => {
  return (
    <div>
      <Filter />
      <ProductCard />
    </div>
  );
};

export default Layout;

