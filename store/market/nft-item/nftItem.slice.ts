import { createSlice, PayloadAction, SerializedError, createAsyncThunk } from '@reduxjs/toolkit';
import _ from 'lodash';
import { RootState } from '../store';
import { GetNftItemsResponse, NftItemsModel } from './nftItem.i';
import itemApi from './nftItem.api';
import { StateLoading } from 'store/store.i';

export const fetchNftItems = createAsyncThunk('items/fetch', async (request?: NftItemRequest) => {
  let params = {};

  if (request) {
    params = _.keys(request).reduce((result, key) => {
      if (!_.isEmpty(request[key]) || _.isBoolean(request[key]) || (_.isNumber(request[key]) && request[key] > 0)) {
        result[key] = request[key];
      }
      return result;
    }, {});
  }

  const res = await itemApi.fetchNftItems(params);
  return res;
});

export const syncNftItems = createAsyncThunk('items/sync', async () => {
  const res = await itemApi.syncNftItems();
  return res;
});

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

const pendingStatus = state => {
  if (state.loading === 'idle') {
    state.loading = 'pending';
  }
};

const rejectResult = (state, action) => {
  if (state.loading === 'pending') {
    state.loading = 'idle';
    state.error = action.error;
  }
};

const marketplaceSlice = createSlice({
  name: 'marketplace',
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
      .addCase(fetchNftItems.pending, pendingStatus)
      .addCase(fetchNftItems.fulfilled, (state, action) => {
        if (state.loading === 'pending') {
          return { ...state, ...action.payload, loading: 'idle', error: null };
        }
      })
      .addCase(fetchNftItems.rejected, rejectResult);
  }
});

export const { updatePage, updateSortBy } = marketplaceSlice.actions;
export const selectMarketplace = (state: RootState) => state.marketplace;
export default marketplaceSlice.reducer;
