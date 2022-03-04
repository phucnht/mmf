import { handlePending, handleReject, DEFAULT_BASE_STATE, handleFulfilledReplace } from 'store/store.utils';
import { createSlice } from '@reduxjs/toolkit';
import { AppState } from 'store/store';
import { DashboardState } from './dashboard.i';
import { getDashboard } from './dashboard.api';

export const initialState: DashboardState = {
  ...DEFAULT_BASE_STATE,
  data: []
};

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getDashboard.pending, handlePending)
      .addCase(getDashboard.fulfilled, handleFulfilledReplace)
      .addCase(getDashboard.rejected, handleReject);
  }
});

export const selectDashboardState = (state: AppState) => state.dashboard;
export const selectDashboardData = (state: AppState) => state.dashboard.data;
export default dashboardSlice.reducer;
