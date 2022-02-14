import { clientMarket } from 'utils/api';
import { GetPaymentTokensResponse } from './paymentToken.i';

const getPaymentTokens = (params?: any): Promise<GetPaymentTokensResponse> =>
  clientMarket.get(`/payment-tokens`, { params });

const paymentTokenApi = { getPaymentTokens };

export default paymentTokenApi;
