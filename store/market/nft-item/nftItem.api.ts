import { createAsyncThunk } from '@reduxjs/toolkit';
import { clientMarket } from 'utils/api';
import { InventoryRequest, NftItemRequest } from './nftItem.i';

export const getNftItems = createAsyncThunk('nftItem/get', async (params: NftItemRequest) =>
  clientMarket.get(`/items`, { params })
);

export const getInventory = createAsyncThunk('inventory/get', async (params: InventoryRequest) =>
  clientMarket.get(`/items`, { params })
);
