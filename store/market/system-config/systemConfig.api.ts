import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppState } from 'store/store';
import { clientMarket } from 'utils/api';

export const getSystemConfig = createAsyncThunk('system/get', async (_, thunkApi) => {
  const { id } = (thunkApi.getState() as AppState).systemConfig.data;
  if (id) {
    return;
  }
  return clientMarket.get(`/system`);
});
