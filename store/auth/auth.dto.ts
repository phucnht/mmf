import { SerializedError } from '@reduxjs/toolkit';

export interface NonceDataRequest {
  address: string;
}

export type NonceData = {
  nonce: string;
} & NonceDataRequest;

export interface LoginApiRequest {
  address: string;
  signature: string;
}

export interface TokenData {
  accessToken: string;
}

export interface LoginState {
  accessToken: string | null;
  address: string | null;
  balance: number;
  noBoxes: number;
}

export interface ProfileRequest {
  avatar: string | null;
  cover: string | null;
  username: string | null;
  bio: string | null;
  playerId: string | null;
  email: string | null;
}

export type AuthState = {
  loading: 'idle' | 'pending';
  error: SerializedError | null;
  loggedIn: boolean;
} & LoginState &
  ProfileRequest;
