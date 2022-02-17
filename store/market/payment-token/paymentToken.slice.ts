import { handleFulfilledReplace, handleReject, handlePending, DEFAULT_BASE_STATE_LIST } from 'store/store.utils';
import { createSlice } from '@reduxjs/toolkit';
import { AppState } from 'store/store';
import { PaymentTokenState } from './paymentToken.i';
import { getPaymentTokens } from './paymentToken.api';

export const initialState: PaymentTokenState = DEFAULT_BASE_STATE_LIST;

const paymentTokenSlice = createSlice({
  name: 'payment-tokens',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getPaymentTokens.pending, handlePending)
      .addCase(getPaymentTokens.fulfilled, handleFulfilledReplace)
      .addCase(getPaymentTokens.rejected, handleReject);
  }
});

export const selectPaymentTokens = (state: AppState) => state.paymentToken;
export default paymentTokenSlice.reducer;
