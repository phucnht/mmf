import { PaymentTokenType } from 'models/Sale';
import { SystemType } from 'models/System';
import { client } from './axios';

const fetchConfig = (): Promise<SystemType> => client.get(`/market-apis/api/system`);
const fetchPayments = (): Promise<PaymentTokenType[]> => client.get(`/market-apis/api/payment-tokens`);

export default {
  fetchConfig,
  fetchPayments,
};
