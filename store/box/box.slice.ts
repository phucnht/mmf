import { handlePending, handleReject, handleFulfilledPagination } from 'store/store.utils';
import { createSlice } from '@reduxjs/toolkit';
import { AppState } from 'store/store';
import { DEFAULT_BASE_STATE_PAGINATION } from 'store/store.utils';
import { getBoxesThunk } from './box.api';
import { BoxState } from './box.i';

export const initialState: BoxState = DEFAULT_BASE_STATE_PAGINATION;

const boxSlice = createSlice({
  name: 'box',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getBoxesThunk.pending, handlePending)
      .addCase(getBoxesThunk.fulfilled, handleFulfilledPagination)
      .addCase(getBoxesThunk.rejected, handleReject);
  }
});

export const selectBoxState = (state: AppState) => state.box;
export const selectBoxData = (state: AppState) => state.box.data;
export default boxSlice.reducer;
