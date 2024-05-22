// redux/apiSlice.js
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchApiData = createAsyncThunk("api/fetchApiData", async () => {
  const response = await fetch("https://fakestoreapi.com/products"); // Replace with your API endpoint
  const data = await response.json();
  return data;
});

const apiSlice = createSlice({
  name: "api",
  initialState: {
    data: [],
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchApiData.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchApiData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchApiData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error;
      });
  },
});

export default apiSlice.reducer;
