import { DATE_DEFAULT } from 'utils/date';
import { createSlice } from '@reduxjs/toolkit';
import { AppState } from 'store/store';
import { DEFAULT_BASE_STATE, handleFulfilledReplace, handlePending, handleReject } from 'store/store.utils';
import { ProfileState } from './profile.i';
import { getProfileByAddress, linkAccountProfile, updateProfile } from './profile.api';

export const initialState: ProfileState = {
  ...DEFAULT_BASE_STATE,
  data: {
    email: '',
    emailVerified: false,
    address: '',
    username: '',
    avatar: '',
    cover: '',
    nonce: 0,
    bio: '',
    userId: '',
    dob: DATE_DEFAULT,
    phone: '',
    gender: ''
  }
};

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      // GET PROFILE BY ADDRESS
      .addCase(getProfileByAddress.pending, handlePending)
      .addCase(getProfileByAddress.fulfilled, handleFulfilledReplace)
      .addCase(getProfileByAddress.rejected, handleReject)
      // UPDATE PROFILE
      .addCase(updateProfile.pending, handlePending)
      .addCase(updateProfile.fulfilled, handleFulfilledReplace)
      .addCase(updateProfile.rejected, handleReject)
      // LINK ACCOUNT PROFILE
      .addCase(linkAccountProfile.pending, handlePending)
      .addCase(linkAccountProfile.fulfilled, handleFulfilledReplace)
      .addCase(linkAccountProfile.rejected, handleReject);
  }
});

export const selectProfile = (state: AppState) => state.profile;
export default profileSlice.reducer;
