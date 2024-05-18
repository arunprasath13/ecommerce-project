import { configureStore } from '@reduxjs/toolkit';
import apiSlice from "./redux/apiSlice"
import cartSlice from './redux/cartSlice';
import deliveryDetailsReducer from "./redux/deliverySlice";
import paymentDetailsReducer from "./redux/paymentDetails"
const store = configureStore({
  reducer: {
    api: apiSlice,
    cart:cartSlice,
    deliveryDetails: deliveryDetailsReducer,
    paymentDetails: paymentDetailsReducer
  },
});

export default store;