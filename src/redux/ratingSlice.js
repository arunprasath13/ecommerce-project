import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  rating: 0, // Default rating filter (show all)
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setRatingFilter(state, action) {
      state.rating = action.payload;
    },
  },
});

export const { setRatingFilter } = filterSlice.actions;
export default filterSlice.reducer;

