import { handleFulfilled } from './../../store.utils';
import { handlePending, handleReject, DEFAULT_BASE_STATE } from 'store/store.utils';
import { createSlice } from '@reduxjs/toolkit';
import { AppState } from 'store/store';
import { AirdropEventState } from './airdropEvent.i';
import { getAirdropEvents } from './airdropEvent.api';

export const initialState: AirdropEventState = {
  ...DEFAULT_BASE_STATE,
  data: []
};

const airdropEventsSlice = createSlice({
  name: 'airdrop-events',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getAirdropEvents.pending, handlePending)
      .addCase(getAirdropEvents.fulfilled, handleFulfilled)
      .addCase(getAirdropEvents.rejected, handleReject);
  }
});

export const selectAirdropEvents = (state: AppState) => state.airdropEvent;
export default airdropEventsSlice.reducer;
