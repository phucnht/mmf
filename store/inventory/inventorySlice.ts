import { DEFAULT_BASE_RESULT_PAGINATION } from './../store.utils';
import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { NftItemRequest } from 'store/nft-item/nftItem.i';
import { pendingStatus, rejectResult } from 'store/store.utils';
import { AppState } from '../store';
import inventoryApi from './inventory.api';
import { InventoryState } from './inventory.i';

export const getInventories = createAsyncThunk('inventories/get', async ({ owner, page, sortBy }: NftItemRequest) => {
  const res = await inventoryApi.getInventories({ owner, page, sortBy });
  return res;
});

export const initialState: InventoryState = DEFAULT_BASE_RESULT_PAGINATION;

const inventorySlice = createSlice({
  name: 'inventory',
  initialState,
  reducers: {
    updatePage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
    updateSortBy: (state, action: PayloadAction<string>) => {
      // state.sortBy = action.payload;
    }
  },
  extraReducers: builder => {
    builder
      .addCase(getInventories.pending, pendingStatus)
      .addCase(getInventories.fulfilled, (state, action) => {
        if (state.loading === false) {
          return { ...state, ...action.payload, loading: true, error: undefined };
        }
      })
      .addCase(getInventories.rejected, rejectResult);
  }
});

export const { updatePage, updateSortBy } = inventorySlice.actions;
export const selectInventory = (state: AppState) => state.inventory;
export default inventorySlice.reducer;
