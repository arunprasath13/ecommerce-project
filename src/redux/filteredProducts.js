import { createSlice } from "@reduxjs/toolkit";
import { fetchApiData } from "./apiSlice";
import fetchedData from "../Data";

export const productSlice = createSlice({
    name:"products",
    initialState:{
        filteredProducts:[],
    },
    reducers:{
        filteredProducts(state,action){
            try{
                const filter = fetchedData.filter((product)=>product.category === action.payload)
                state.filteredProducts = filter;
            }catch(err){
                return err;
            }
        }
    }
})



export const {filteredProducts} = productSlice.actions;
export default productSlice.reducer