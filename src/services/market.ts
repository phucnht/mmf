import { AirdropEvent } from 'models/Airdrop';
import { client } from './axios';

const fetchAirdropEvents = (): Promise<AirdropEvent[]> => client.get(`/market-apis/api/airdrop-events`);
const getAirdropEventById = ({ id }: { id: string }): Promise<AirdropEvent> =>
  client.get(`/market-apis/api/airdrop-events/${id}`);

export default {
  fetchAirdropEvents,
  getAirdropEventById,
};
