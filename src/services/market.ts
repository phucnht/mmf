import { AirdropEvent } from 'models/Airdrop';
import { ItemPaginateParams, ItemPaginateType } from 'models/Item';
import { client } from './axios';

const fetchAirdropEvents = (): Promise<AirdropEvent[]> => client.get(`/market-apis/api/airdrop-events`);
const getAirdropEventById = ({ id }: { id: string }): Promise<AirdropEvent> =>
  client.get(`/market-apis/api/airdrop-events/${id}`);

const fetchItems = (params: ItemPaginateParams): Promise<ItemPaginateType> =>
  client.get(`/market-apis/api/items`, { params });

export default {
  fetchAirdropEvents,
  getAirdropEventById,

  fetchItems,
};
