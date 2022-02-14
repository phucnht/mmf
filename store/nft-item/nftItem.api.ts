import appConfig from 'config';
import { client } from 'utils/api';
import { NftItemsModel } from './nftItem.i';

const clientMarketplace = client(appConfig.server.marketplaceApiUrl);

const fetchInventories = params => clientMarketplace.get('/inventories', { params });

const fetchNftItems = (params): Promise<NftItemsModel> => clientMarketplace.get(`/items`, { params });
const fetchNftItemHistories = params => clientMarketplace.get('/item-histories', { params });
const fetchNftItemDetail = ({ id }) => clientMarketplace.get(`/items/${id}`);
const fetchNftItemTransactionFee = ({ id, ...params }) =>
  clientMarketplace.get(`/items/${id}/transaction-fee`, { params });
const fetchNftItemHashMessage = ({ id, ...params }) => clientMarketplace.get(`/items/${id}/hash-message`, { params });

const syncNftItems = () => clientMarketplace.post(`/items/data-sync`);

const fetchSaleNftItems = params => clientMarketplace.get('/sale-items', { params });

// const getUserHashMessage = ({ id, ...params }) => clientMarketplace.get(`/user-items/${id}/hash-message`, { params });
// const createUserSale = ({ id, ...body }) => clientMarketplace.post(`/user-items/${id}/sale`, body);
// const cancelUserSale = ({ id }) => clientMarketplace.delete(`/user-items/${id}/sale`);
// const buyItem = ({ id, ...body }) => clientMarketplace.post(`/items/${id}/bids`, body);

const nftItemApi = {
  fetchInventories,
  fetchNftItems,
  syncNftItems,
  fetchSaleNftItems,
  fetchNftItemHistories,
  fetchNftItemDetail,
  fetchNftItemTransactionFee,
  fetchNftItemHashMessage
};

export default nftItemApi;
