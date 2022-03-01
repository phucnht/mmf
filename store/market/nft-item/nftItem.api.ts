import { createAsyncThunk } from '@reduxjs/toolkit';
import { clientMarket } from 'utils/api';
import { InventoryRequest, NftItemHistoryRequest, NftItemRequest } from './nftItem.i';

export const getNftItems = createAsyncThunk('nftItem/get', async (params?: NftItemRequest) =>
  clientMarket.get(`/items`, { params })
);

export const getInventory = createAsyncThunk('nftItem/inventory/get', async (params?: InventoryRequest) =>
  clientMarket.get(`/items/inventory`, { params })
);

export const getNftItemHistory = createAsyncThunk('nftItem/inventory/get', async (params?: NftItemHistoryRequest) =>
  clientMarket.get(`/item-histories`, { params })
);
