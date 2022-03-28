import { createAsyncThunk } from '@reduxjs/toolkit';
import { clientMarket } from 'utils/api';
import { AirdropEventRequest } from './airdropEvent.i';

export const getAirdropEvents = createAsyncThunk('airdrop-events/get', async () => clientMarket.get(`/airdrop-events`));

export const addAirdropEvent = createAsyncThunk('airdrop-events/post', async (data: AirdropEventRequest) =>
  clientMarket.post(`/airdrop-events`, data)
);
