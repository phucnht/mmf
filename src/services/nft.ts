import { ItemPaginateParams, ItemPaginateType, ItemType } from 'models/Item';
import { client } from './axios';

const fetchItems = (params?: ItemPaginateParams): Promise<ItemPaginateType> => client.get(`/api/items`, { params });
const getItem = ({ id }: { id: string }): Promise<ItemType> => client.get(`/api/items/${id}`);

export default {
  fetchItems,
  getItem,
};
