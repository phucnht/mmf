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

export type GetHashMessageParams = {
  nftItemId: string;
  paymentTokenId: string;
  price: number;
  saltNonce: number;
  amount: number;
  ownerAccept: boolean;
};

export type GetHashMessageType = {
  hashMessage: string;
};

export type CreateSaleBody = {
  nftItemId: string;
  paymentTokenId: string;
  price: number;
  saltNonce: number;
  amount: number;
  signedSignature: string;
};

export type CreateSaleType = {};
