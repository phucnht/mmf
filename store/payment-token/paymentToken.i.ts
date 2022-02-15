import { BaseResults, GetResponse, GetState } from 'store/store.i';

export interface PaymentTokenDto {
  id: string;
  name: string;
  symbol: string;
  decimals: number;
  contractAddress: string;
}

export type PaymentTokenResult = BaseResults<PaymentTokenDto>;
export type PaymentTokenState = GetState<PaymentTokenResult>;
export type GetPaymentTokensResponse = GetResponse<PaymentTokenResult>;
