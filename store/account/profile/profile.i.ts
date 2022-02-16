import { BaseResult, GetResponse, GetState } from 'store/store.i';

export interface ProfileByAddressRequest {
  address: string;
}

export interface ProfileLinkAccountRequest {
  email: string;
  password: string;
}

export interface ProfileRequest {
  username: string;
  bio: string;
  playerId: string;
  email: string;
  address: string;
  avatar: string;
  cover: string;
}

export type ProfileDto = {
  email: string;
  emailVerified: boolean;
  address: string;
  username: string;
  avatar: string;
  cover: string;
  nonce: number;
  bio: string;
  userId: string;
  dob: Date;
  phone: string;
  gender: string;
};

export interface BasicUserDto {
  address: string;
  username: string;
  avatar: string;
}

export type GetProfileResponse = GetResponse<BaseResult<ProfileDto>>;

// STATE
export type ProfileState = GetState<BaseResult<ProfileDto>>;
