import { handlePending, handleReject, handleFulfilledPagination } from 'store/store.utils';
import { createSlice } from '@reduxjs/toolkit';
import { AppState } from 'store/store';
import { DEFAULT_BASE_STATE_PAGINATION } from 'store/store.utils';
import { getNftItems } from './nftItem.api';
import { NftItemsState } from './nftItem.i';

export const initialState: NftItemsState = DEFAULT_BASE_STATE_PAGINATION;

const inventorySlice = createSlice({
  name: 'inventory',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getNftItems.pending, handlePending)
      .addCase(getNftItems.fulfilled, handleFulfilledPagination)
      .addCase(getNftItems.rejected, handleReject);
  }
});

export const selectInventoryState = (state: AppState) => state.inventory;
export const selectInventoryData = (state: AppState) => state.inventory.data;
export default inventorySlice.reducer;
