import { createAsyncThunk } from '@reduxjs/toolkit';
import { clientAccount } from 'utils/api';
import { GetNonceResponse, GetTokenResponse, NonceRequest, TokenRequest } from './auth.i';

export const getNonce = createAsyncThunk(
  'auth/nonce',
  async (params: NonceRequest): Promise<GetNonceResponse> => clientAccount.get(`/authentication/nonce`, { params })
);

export const getToken = createAsyncThunk(
  'auth/token',
  async (params: TokenRequest): Promise<GetTokenResponse> => clientAccount.post(`/authentication/token`, params)
);
