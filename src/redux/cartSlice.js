import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        addItems:(state,action) => {
             state.push(action.payload)
        }
    }
})

export const {addItems} = cartSlice.actions;

export default cartSlice.reducer;