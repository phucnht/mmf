export type PaymentTokenType = {
  id: string;
  symbol: string;
  contractAddress: string;
};

export type SaleType = {
  id: string;
  saleType: 1 | 2;
  price: number;
  cancelled: boolean;
  paymentTokenId: string;
  paymentToken: PaymentTokenType;
};
