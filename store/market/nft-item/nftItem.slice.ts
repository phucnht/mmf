import { handlePending, handleReject, handleFulfilledPagination } from 'store/store.utils';
import { createSlice } from '@reduxjs/toolkit';
import { AppState } from 'store/store';
import { DEFAULT_BASE_STATE_PAGINATION } from 'store/store.utils';
import { getNftItems } from './nftItem.api';
import { NftItemsState } from './nftItem.i';

export const initialState: NftItemsState = DEFAULT_BASE_STATE_PAGINATION;

const nftItemSlice = createSlice({
  name: 'nftItem',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getNftItems.pending, handlePending)
      .addCase(getNftItems.fulfilled, handleFulfilledPagination)
      .addCase(getNftItems.rejected, handleReject);
  }
});

export const selectNftItemState = (state: AppState) => state.nftItem;
export const selectNftItemData = (state: AppState) => state.nftItem.data;
export default nftItemSlice.reducer;
