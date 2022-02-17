import _isEmpty from 'lodash/isEmpty';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppState } from 'store/store';
import { clientMarket } from 'utils/api';

export const getPaymentTokens = createAsyncThunk('paymentTokens/get', async (_, thunkApi) => {
  const paymentTokens = (thunkApi.getState() as AppState).paymentToken.data;
  if (!_isEmpty(paymentTokens)) {
    return;
  }
  return clientMarket.get(`/payment-tokens`);
});
