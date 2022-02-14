import { StateLoading } from './../store.i';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { AppState } from 'store/store';
import { GetSystemConfigResponse } from './systemConfig.i';
import systemApi from './systemConfig.api';
import { pendingStatus, rejectResult } from 'store/store.utils';

export type SystemConfigState = StateLoading & GetSystemConfigResponse;

export const getSystems = createAsyncThunk('system/get', async () => {
  const res = await systemApi.getSystemConfig();
  return res;
});

export const initialState: SystemConfigState = {
  loading: false,
  data: null,
  success: true,
  errors: {}
};

const systemConfigSlice = createSlice({
  name: 'system',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getSystems.pending, pendingStatus)
      .addCase(getSystems.fulfilled, (state, action) => {
        if (state.loading === true) {
          return { ...state, ...action.payload, loading: false, errors: {} };
        }
      })
      .addCase(getSystems.rejected, rejectResult);
  }
});

export const selectSystemConfig = (state: AppState) => state.systemConfig;
export default systemConfigSlice.reducer;
