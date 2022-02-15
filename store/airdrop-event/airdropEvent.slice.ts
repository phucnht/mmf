import { DEFAULT_BASE_RESULTS } from './../store.utils';
import { PaginationRequest } from './../store.i';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { AppState } from 'store/store';
import { AirdropEventRequest, AirdropEventState } from './airdropEvent.i';
import airdropEventApi from './airdropEvent.api';
import { pendingStatus, rejectResult } from 'store/store.utils';

export const getAirdropEvents = createAsyncThunk('airdop-events/get', async ({ page, sortBy }: PaginationRequest) => {
  const res = await airdropEventApi.getAirdropEvents({ page, sortBy });
  return res;
});

export const addAirdropEvent = createAsyncThunk('airdop-events/post', async (data: AirdropEventRequest) => {
  const res = await airdropEventApi.addAirdropEvent(data);
  return res;
});

export const initialState: AirdropEventState = DEFAULT_BASE_RESULTS;

const airdropEventsSlice = createSlice({
  name: 'airdrop-events',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getAirdropEvents.pending, pendingStatus)
      .addCase(getAirdropEvents.fulfilled, (state, action) => {
        if (state.loading === true) {
          return { ...state, ...action.payload, loading: false, errors: undefined };
        }
      })
      .addCase(getAirdropEvents.rejected, rejectResult);
  }
});

export const selectAirdropEvents = (state: AppState) => state.airdropEvent;
export default airdropEventsSlice.reducer;
