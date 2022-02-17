import { convertArrayToObject } from './../../../utils/convert';
import { handleReject, handlePending, DEFAULT_BASE_STATE } from 'store/store.utils';
import { createSlice } from '@reduxjs/toolkit';
import { AppState } from 'store/store';
import { PaymentTokenState } from './paymentToken.i';
import { getPaymentTokens } from './paymentToken.api';

export const initialState: PaymentTokenState = { ...DEFAULT_BASE_STATE, data: {} };

const paymentTokenSlice = createSlice({
  name: 'paymentToken',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getPaymentTokens.pending, handlePending)
      .addCase(getPaymentTokens.fulfilled, (state: any, action: any) => {
        if (state.loading === true) {
          return { ...DEFAULT_BASE_STATE, data: convertArrayToObject(action.payload, 'symbol') };
        }
      })
      .addCase(getPaymentTokens.rejected, handleReject);
  }
});

export const selectPaymentTokenState = (state: AppState) => state.paymentToken;
export const selectPaymentTokenData = (state: AppState) => state.paymentToken.data;
export default paymentTokenSlice.reducer;
