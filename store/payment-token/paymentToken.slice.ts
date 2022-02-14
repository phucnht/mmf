import { StateLoading } from './../store.i';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { AppState } from 'store/store';
import { GetPaymentTokensResponse } from './paymentToken.i';
import paymentTokenApi from './paymentToken.api';

export type PaymentTokenState = StateLoading & GetPaymentTokensResponse;

export interface PaginationRequest {
  sortBy?: string;
  page?: number;
}

export const getPaymentTokens = createAsyncThunk('payment-tokens/get', async () => {
  const res = await paymentTokenApi.getPaymentTokens();
  return res;
});

export const initialState: PaymentTokenState = {
  loading: false,
  data: [],
  success: true,
  errors: {}
};

const pendingStatus = (state: any) => {
  if (state.loading === false) {
    state.loading = true;
  }
};

const rejectResult = (state: any, action: any) => {
  if (state.loading === true) {
    state.loading = false;
    state.error = action.error;
  }
};

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
