// // components/PriceFilter.js
// import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { setFilteredProducts } from "../../redux/productSlice"

// const PriceFilter = () => {
//   const [minPrice, setMinPrice] = useState("");
//   const [maxPrice, setMaxPrice] = useState("");
//   const dispatch = useDispatch();

//   const handleFilterChange = () => {
//     // Filter products based on the selected price range
//     const filteredProducts = products.filter((product) => {
//       const price = parseFloat(product.price);
//       return (
//         (minPrice === "" || price >= parseFloat(minPrice)) &&
//         (maxPrice === "" || price <= parseFloat(maxPrice))
//       );
//     });
//     dispatch(setFilteredProducts(filteredProducts));
//   };

//   return (
//     <div>
//       <input
//         type="number"
//         placeholder="Min Price"
//         value={minPrice}
//         onChange={(e) => setMinPrice(e.target.value)}
//       />
//       <input
//         type="number"
//         placeholder="Max Price"
//         value={maxPrice}
//         onChange={(e) => setMaxPrice(e.target.value)}
//       />
//       <button onClick={handleFilterChange}>Apply</button>
//     </div>
//   );
// };

// export default PriceFilter;

