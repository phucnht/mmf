import { AirdropEvent } from 'models/Airdrop';
import { ItemPaginateParams, ItemPaginateType, ItemType } from 'models/Item';
import { client } from './axios';

const fetchAirdropEvents = (): Promise<AirdropEvent[]> => client.get(`/market-apis/api/airdrop-events`);
const getAirdropEventById = ({ id }: { id: string }): Promise<AirdropEvent> =>
  client.get(`/market-apis/api/airdrop-events/${id}`);

const fetchInventory = (params: ItemPaginateParams): Promise<ItemPaginateType> =>
  client.get(`/market-apis/api/items/inventory`, { params });
const fetchSales = (params: ItemPaginateParams): Promise<ItemPaginateType> =>
  client.get(`/market-apis/api/sale-items`, { params });
const fetchItems = (params: ItemPaginateParams): Promise<ItemPaginateType> =>
  client.get(`/market-apis/api/items`, { params });

const getItemById = ({ id }: { id: string }): Promise<ItemType> => client.get(`/market-apis/api/items/${id}`);

export default {
  fetchAirdropEvents,
  getAirdropEventById,

  fetchInventory,
  fetchSales,
  fetchItems,

  getItemById,
};
