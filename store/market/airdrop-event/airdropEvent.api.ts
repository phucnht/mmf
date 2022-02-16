import { createAsyncThunk } from '@reduxjs/toolkit';
import { clientMarket } from 'utils/api';
import { AirdropEventRequest } from './airdropEvent.i';

export const getAirdropEvents = createAsyncThunk('airdop-events/get', async () => clientMarket.get(`/airdrop-events`));

export const addAirdropEvent = createAsyncThunk('airdop-events/post', async (data: AirdropEventRequest) =>
  clientMarket.post(`/airdrop-events`, data)
);
