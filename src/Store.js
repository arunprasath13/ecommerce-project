import { configureStore } from '@reduxjs/toolkit';
import apiSlice from "./redux/apiSlice"
import cartSlice from './redux/cartSlice';
const store = configureStore({
  reducer: {
    api: apiSlice,
    cart:cartSlice
  },
});

export default store;