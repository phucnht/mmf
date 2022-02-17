import { BaseResults, GetResponse, GetState } from 'store/store.i';

export interface PaymentTokenDto {
  id: string;
  name: string;
  symbol: string;
  decimals: number;
  contractAddress: string;
}

export interface PaymentTokenStateData {
  data: { [x: string]: PaymentTokenDto };
}

export type PaymentTokenState = GetState<PaymentTokenStateData>;
export type GetPaymentTokensResponse = GetResponse<BaseResults<PaymentTokenDto>>;
