import { createAsyncThunk } from '@reduxjs/toolkit';
import { clientDashboard } from 'utils/api';
import { DashboardRequest } from './dashboard.i';

export const getDashboard = createAsyncThunk('dashboard/get', async (params: DashboardRequest) =>
  clientDashboard.get(`/dashboard`, { params })
);
