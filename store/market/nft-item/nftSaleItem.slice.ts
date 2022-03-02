import { handlePending, handleReject, handleFulfilledPagination } from 'store/store.utils';
import { createSlice } from '@reduxjs/toolkit';
import { AppState } from 'store/store';
import { DEFAULT_BASE_STATE_PAGINATION } from 'store/store.utils';
import { getNftItems } from './nftItem.api';
import { NftItemsState } from './nftItem.i';

export const initialState: NftSaleItemsState = DEFAULT_BASE_STATE_PAGINATION;

const nftSaleItemSlice = createSlice({
  name: 'nftSaleItem',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getNftSaleItems.pending, handlePending)
      .addCase(getNftSaleItems.fulfilled, handleFulfilledPagination)
      .addCase(getNftSaleItems.rejected, handleReject);
  }
});

export const selectNftSaleItemState = (state: AppState) => state.nftSaleItem;
export const selectNftSaleItemData = (state: AppState) => state.nftSaleItem.data;
export default nftSaleItemSlice.reducer;
