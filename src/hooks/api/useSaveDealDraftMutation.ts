import { useMutation } from '@tanstack/react-query';
import { dealsApi } from '@/services/deals';
import { DealDraft } from '@/types/contract';

export const saveDealDraftMutationKey = ['deals', 'draft'];

export const useSaveDealDraftMutation = () =>
  useMutation({
    mutationKey: saveDealDraftMutationKey,
    mutationFn: (payload: DealDraft) => dealsApi.saveDraft(payload),
  });
