import { clientMarket } from 'utils/api';
import { GetInventoriesResponse } from './inventory.i';

const getInventories = (params?: any): Promise<GetInventoriesResponse> => clientMarket.get(`/inventories`, { params });

const inventoryApi = { getInventories };

export default inventoryApi;
