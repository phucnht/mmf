import { clientMarket } from 'utils/api';
import { GetSystemConfigResponse } from './systemConfig.i';

const getSystemConfig = (): Promise<GetSystemConfigResponse> => clientMarket.get(`/system`);

const systemConfigApi = { getSystemConfig };

export default systemConfigApi;
