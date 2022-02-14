export interface PaymentTokenDto {
  id: string;
  name: string;
  symbol: string;
  decimals: number;
  contractAddress: string;
}

export interface GetPaymentTokensResponse {
  data: PaymentTokenDto[] | null;
  errors: any;
  success: boolean;
}
