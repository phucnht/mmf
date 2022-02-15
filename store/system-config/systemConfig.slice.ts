import { DEFAULT_BASE_RESULT } from './../store.utils';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { AppState } from 'store/store';
import systemApi from './systemConfig.api';
import { pendingStatus, rejectResult } from 'store/store.utils';
import { SystemConfigState } from './systemConfig.i';

export const getSystems = createAsyncThunk('system/get', async () => {
  const res = await systemApi.getSystemConfig();
  return res;
});

export const initialState: SystemConfigState = DEFAULT_BASE_RESULT;

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
