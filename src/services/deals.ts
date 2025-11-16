import { httpClient } from '@/lib/http-client';
import { DealDraft, DealListItem } from '@/types/contract';

export type DealsFilters = {
  search?: string;
  status?: string;
};

export const dealsApi = {
  async list(params?: DealsFilters) {
    const { data } = await httpClient.get<DealListItem[]>('/deals', { params });
    return data;
  },
  async saveDraft(payload: DealDraft) {
    const { data } = await httpClient.post('/deals', payload);
    return data;
  },
};
