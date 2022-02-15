import { DEFAULT_BASE_RESULTS, pendingStatus, rejectResult } from './../store.utils';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { AppState } from 'store/store';
import { PaymentTokenState } from './paymentToken.i';
import paymentTokenApi from './paymentToken.api';

export const getPaymentTokens = createAsyncThunk('payment-tokens/get', async () => {
  const res = await paymentTokenApi.getPaymentTokens();
  return res;
});

export const initialState: PaymentTokenState = DEFAULT_BASE_RESULTS;

const paymentTokenSlice = createSlice({
  name: 'payment-tokens',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getPaymentTokens.pending, pendingStatus)
      .addCase(getPaymentTokens.fulfilled, (state, action) => {
        if (state.loading === true) {
          return { ...state, ...action.payload, loading: false, errors: {} };
        }
      })
      .addCase(getPaymentTokens.rejected, rejectResult);
  }
});

export const selectPaymentTokens = (state: AppState) => state.paymentToken;
export default paymentTokenSlice.reducer;
