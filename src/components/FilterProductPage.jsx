// FilteredProductPage.js

import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "./ProductCard";

const FilteredProductPage = () => {
  const filteredProducts = useSelector((state) => state.products.filteredProducts);

  return (
    <div>
      <h1>Filtered Products</h1>
      <ProductCard products={filteredProducts} />
    </div>
  );
};

export default FilteredProductPage;
