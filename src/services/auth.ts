import { GetNonceData, GetNonceType, GetTokenData, GetTokenType } from 'models/Auth';
import { client } from './axios';

const getNonce = (params: GetNonceType): Promise<GetNonceData> =>
  client.get(`/account-apis/api/authentication/nonce`, { params });
const getToken = (body: GetTokenType): Promise<GetTokenData> =>
  client.post(`/account-apis/api/authentication/token`, body);

export default {
  getNonce,
  getToken,
};
