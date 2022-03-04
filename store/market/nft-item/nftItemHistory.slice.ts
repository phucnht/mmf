import { handlePending, handleReject, handleFulfilledPagination } from 'store/store.utils';
import { createSlice } from '@reduxjs/toolkit';
import { AppState } from 'store/store';
import { DEFAULT_BASE_STATE_PAGINATION } from 'store/store.utils';
import { getNftItemHistory } from './nftItem.api';
import { NftItemHistoryState } from './nftItem.i';

export const initialState: NftItemHistoryState = DEFAULT_BASE_STATE_PAGINATION;

const nftItemHistorySlice = createSlice({
  name: 'nftItemHistory',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getNftItemHistory.pending, handlePending)
      .addCase(getNftItemHistory.fulfilled, handleFulfilledPagination)
      .addCase(getNftItemHistory.rejected, handleReject);
  }
});

export const selectNftItemHistoryState = (state: AppState) => state.nftItemHistory;
export const selectNftItemHistoryData = (state: AppState) => state.nftItemHistory.data;
export default nftItemHistorySlice.reducer;
