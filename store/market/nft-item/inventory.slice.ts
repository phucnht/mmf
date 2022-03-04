import { handlePending, handleReject, handleFulfilledPagination } from 'store/store.utils';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppState } from 'store/store';
import { DEFAULT_BASE_STATE_PAGINATION } from 'store/store.utils';
import { getInventory } from './nftItem.api';
import { NftItemState } from './nftItem.i';

export const initialState: NftItemState = DEFAULT_BASE_STATE_PAGINATION;

const inventorySlice = createSlice({
  name: 'inventory',
  initialState,
  reducers: {
    updatePage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    }
  },
  extraReducers: builder => {
    builder
      .addCase(getInventory.pending, handlePending)
      .addCase(getInventory.fulfilled, handleFulfilledPagination)
      .addCase(getInventory.rejected, handleReject);
  }
});

export const inventoryActions = inventorySlice.actions;
export const selectInventoryState = (state: AppState) => state.inventory;
export const selectInventoryData = (state: AppState) => state.inventory.data;
export default inventorySlice.reducer;
