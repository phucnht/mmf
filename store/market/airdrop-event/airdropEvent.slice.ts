import { handleFulfilledReplace } from './../../store.utils';
import { handlePending, handleReject, DEFAULT_BASE_STATE } from 'store/store.utils';
import { createSlice } from '@reduxjs/toolkit';
import { AppState } from 'store/store';
import { AirdropEventState } from './airdropEvent.i';
import { getAirdropEvents } from './airdropEvent.api';

export const initialState: AirdropEventState = {
  ...DEFAULT_BASE_STATE,
  data: []
};

const airdropEventSlice = createSlice({
  name: 'airdropEvent',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getAirdropEvents.pending, handlePending)
      .addCase(getAirdropEvents.fulfilled, handleFulfilledReplace)
      .addCase(getAirdropEvents.rejected, handleReject);
  }
});

export const selectAirdropEventState = (state: AppState) => state.airdropEvent;
export const selectAirdropEventData = (state: AppState) => state.airdropEvent.data;
export default airdropEventSlice.reducer;
