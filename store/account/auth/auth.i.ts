import { BaseResult, GetResponse, GetState } from 'store/store.i';

// NONCE
export interface NonceRequest {
  address?: string;
}

export type NonceDto = {
  address: string;
  nonce: string;
};

export type WhitelistDto = {
  name: string;
  addresses: string;
};

export type GetNonceResponse = GetResponse<BaseResult<NonceDto>>;

// TOKEN
export interface TokenRequest {
  address?: string;
  signature?: string;
}

export interface TokenDto {
  accessToken: string;
}

export type GetTokenResponse = GetResponse<BaseResult<TokenDto>>;

// STATE
export interface AuthDto {
  accessToken: string;
  address: string;
  balance: number;
  balance2: number;
}
export type AuthState = GetState<BaseResult<AuthDto>>;
