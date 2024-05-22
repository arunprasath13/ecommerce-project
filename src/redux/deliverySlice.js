import { createSlice } from '@reduxjs/toolkit';

const deliveryDetailsSlice = createSlice({
  name: 'deliveryDetails',
  initialState: {
    address: '',
    city: '',
    state: '',
    zipCode: ''
  },
  reducers: {
    setDeliveryDetails: (state, action) => {
      return { ...state, ...action.payload };
    }
  }
});

export const { setDeliveryDetails } = deliveryDetailsSlice.actions;
export default deliveryDetailsSlice.reducer;
