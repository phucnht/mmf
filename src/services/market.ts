import { AirdropEvent } from 'models/Airdrop';
import { ItemPaginateParams, ItemPaginateType, ItemType, SalePaginateType } from 'models/Item';
import { CreateSaleBody, CreateSaleType, GetHashMessageParams, GetHashMessageType } from 'models/Sale';
import { client } from './axios';

const fetchAirdropEvents = (): Promise<AirdropEvent[]> => client.get(`/market-apis/api/airdrop-events`);
const getAirdropEventById = ({ id }: { id: string }): Promise<AirdropEvent> =>
  client.get(`/market-apis/api/airdrop-events/${id}`);

const fetchInventory = (params: ItemPaginateParams): Promise<ItemPaginateType> =>
  client.get(`/market-apis/api/items/inventory`, { params });
const fetchSales = (params: ItemPaginateParams): Promise<SalePaginateType> =>
  client.get(`/market-apis/api/sale-items`, { params });
const fetchItems = (params: ItemPaginateParams): Promise<ItemPaginateType> =>
  client.get(`/market-apis/api/items`, { params });

const getItemById = ({ id }: { id: string }): Promise<ItemType> => client.get(`/market-apis/api/items/${id}`);

const getHashMessage = (params: GetHashMessageParams): Promise<GetHashMessageType> =>
  client.get(`/market-apis/api/sale-items/hash-message`, { params });
const createSale = (body: CreateSaleBody): Promise<CreateSaleType> =>
  client.post(`/market-apis/api/sale-items/create`, body);
const deleteSale = ({ id }: { id: string }): Promise<any> => client.delete(`/market-apis/api/sale-items/${id}`);

export default {
  fetchAirdropEvents,
  getAirdropEventById,

  fetchInventory,
  fetchSales,
  fetchItems,

  getItemById,
  getHashMessage,
  createSale,
  deleteSale,
};
