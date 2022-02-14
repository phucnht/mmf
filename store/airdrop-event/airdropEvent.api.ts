import { clientMarket } from 'utils/api';
import { GetAirdropEventsReponse } from './airdropEvent.i';

const getAirdropEvents = (params?: any): Promise<GetAirdropEventsReponse> =>
  clientMarket.get(`/airdrop-events`, { params });
const addAirdropEvent = (data: any) => clientMarket.post(`/airdrop-events`, data);

const airdropEventApi = { getAirdropEvents, addAirdropEvent };

export default airdropEventApi;
