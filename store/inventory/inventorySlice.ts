import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { pendingStatus, rejectResult } from 'store/store.utils';
import { AppState } from '../store';
import itemApi from './inventory.api';

export const fetchInventoryNftItems = createAsyncThunk(
  'items/inventories/fetch',
  async ({ owner, page, sortBy }: NftItemRequest) => {
    const res = await itemApi.fetchInventories({ owner, page, sortBy });
    return res;
  }
);

export const initialState: NftItemsState = {
  items: [],
  loading: 'idle',
  error: null,
  hasNext: false,
  hasPrevious: false,
  pages: 0,
  currentPage: 1,
  size: 0,
  total: 0,
  sortBy: ''
};

const inventorySlice = createSlice({
  name: 'inventory',
  initialState,
  reducers: {
    updatePage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
    updateSortBy: (state, action: PayloadAction<string>) => {
      state.sortBy = action.payload;
    }
  },
  extraReducers: builder => {
    builder
      .addCase(fetchInventoryNftItems.pending, pendingStatus)
      .addCase(fetchInventoryNftItems.fulfilled, (state, action) => {
        if (state.loading === 'pending') {
          return { ...state, ...action.payload, loading: 'idle', error: null };
        }
      })
      .addCase(fetchInventoryNftItems.rejected, rejectResult);
  }
});

export const { updatePage, updateSortBy } = inventorySlice.actions;
export const selectInventory = (state: AppState) => state.inventory;
export default inventorySlice.reducer;
