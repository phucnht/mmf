import { handlePending, handleReject, handleFulfilledPagination } from 'store/store.utils';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppState } from 'store/store';
import { DEFAULT_BASE_STATE_PAGINATION } from 'store/store.utils';
import { getNftSaleItems } from './nftItem.api';
import { NftSaleItemState } from './nftItem.i';

export const initialState: NftSaleItemState = DEFAULT_BASE_STATE_PAGINATION;

const nftSaleItemSlice = createSlice({
  name: 'nftSaleItem',
  initialState,
  reducers: {
    updatePageSaleItems: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    }
  },
  extraReducers: builder => {
    builder
      .addCase(getNftSaleItems.pending, handlePending)
      .addCase(getNftSaleItems.fulfilled, handleFulfilledPagination)
      .addCase(getNftSaleItems.rejected, handleReject);
  }
});

export const nftSaleItemActions = nftSaleItemSlice.actions;
export const selectNftSaleItemState = (state: AppState) => state.nftSaleItem;
export const selectNftSaleItemData = (state: AppState) => state.nftSaleItem.data;
export default nftSaleItemSlice.reducer;
