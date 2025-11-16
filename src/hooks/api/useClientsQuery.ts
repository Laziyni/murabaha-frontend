import { useQuery } from '@tanstack/react-query';
import { clientsApi } from '@/services/clients';

export const clientsQueryKey = ['clients'];

export const useClientsQuery = () =>
  useQuery({
    queryKey: clientsQueryKey,
    queryFn: () => clientsApi.list(),
  });
