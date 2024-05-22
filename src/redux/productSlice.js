// redux/productSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filteredProducts: [], // Filtered products will be stored here
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setFilteredProducts(state, action) {
      state.filteredProducts = action.payload;
    },
  },
});

export const { setFilteredProducts } = productSlice.actions;
export default productSlice.reducer;
