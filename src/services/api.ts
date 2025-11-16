import { authApi } from './auth';
import { clientsApi } from './clients';
import { dealsApi } from './deals';

export const Api = {
  auth: authApi,
  clients: clientsApi,
  deals: dealsApi,
};

export default Api;
