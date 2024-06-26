import { configureStore } from '@reduxjs/toolkit';
import apiSlice from "./redux/apiSlice"
import cartSlice from './redux/cartSlice';
import deliveryDetailsReducer from "./redux/deliverySlice";
import paymentDetailsReducer from "./redux/paymentDetails"
import productSlice from "./redux/filteredProducts"
import filterSlice from "./redux/ratingSlice"
const store = configureStore({
  reducer: {
    api: apiSlice,
    cart:cartSlice,
    deliveryDetails: deliveryDetailsReducer,
    paymentDetails: paymentDetailsReducer,
    products: productSlice,
    filter: filterSlice,
  },
});

export default store;