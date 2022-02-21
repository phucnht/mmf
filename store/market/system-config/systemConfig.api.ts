import { createAsyncThunk } from '@reduxjs/toolkit';
import { clientMarket } from 'utils/api';

export const getSystemConfig = createAsyncThunk('system/get', async () => {
  return clientMarket.get(`/system`);
});
