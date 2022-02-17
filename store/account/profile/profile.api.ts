import { createAsyncThunk } from '@reduxjs/toolkit';
import { clientAccount } from 'utils/api';
import { ProfileByAddressRequest, ProfileLinkAccountRequest, ProfileRequest } from './profile.i';

export const getProfileByAddress = createAsyncThunk('profile/getByAddress', async (params: ProfileByAddressRequest) => {
  const res = await clientAccount.get(`/profile/${params.address}`);
  return res;
});

export const updateProfile = createAsyncThunk('profile/update', async (params: ProfileRequest) => {
  const res = await clientAccount.put(`/profile`, params);
  return res;
});

export const linkAccountProfile = createAsyncThunk(
  'profile/link-account',
  async (params: ProfileLinkAccountRequest) => {
    const res = await clientAccount.post(`/profile/link-account`, params);
    return res;
  }
);
