import { createSlice } from '@reduxjs/toolkit';

const paymentDetailsSlice = createSlice({
  name: 'paymentDetails',
  initialState: {
    cardNumber: '',
    expiryDate: '',
    cvv: ''
  },
  reducers: {
    setPaymentDetails: (state, action) => {
      return { ...state, ...action.payload };
    }
  }
});

export const { setPaymentDetails } = paymentDetailsSlice.actions;
export default paymentDetailsSlice.reducer;
