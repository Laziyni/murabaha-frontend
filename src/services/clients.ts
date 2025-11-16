import { httpClient } from '@/lib/http-client';
import { ClientSummary } from '@/types/client';

export const clientsApi = {
  async list() {
    const { data } = await httpClient.get<ClientSummary[]>('/clients');
    return data;
  },
};
