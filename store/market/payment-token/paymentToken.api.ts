import { createAsyncThunk } from '@reduxjs/toolkit';
import { clientMarket } from 'utils/api';

export const getPaymentTokens = createAsyncThunk('paymentTokens/get', async () => {
  return clientMarket.get(`/payment-tokens`);
});
