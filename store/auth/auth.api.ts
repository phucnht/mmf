import { clientAccount } from 'utils/api';
import { NonceData, TokenData, NonceDataRequest, LoginApiRequest } from './auth.i';

export const getNonceData = (params: NonceDataRequest): Promise<NonceData> =>
  clientAccount.get(`/authentication/nonce`, { params });

export const login = (params: LoginApiRequest): Promise<TokenData> =>
  clientAccount.post(`/authentication/token`, params);
