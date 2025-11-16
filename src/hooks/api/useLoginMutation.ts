import { useMutation } from '@tanstack/react-query';
import { authApi } from '@/services/auth';
import { LoginRequest } from '@/types/auth';

export const loginMutationKey = ['auth', 'login'];

export const useLoginMutation = () =>
  useMutation({
    mutationKey: loginMutationKey,
    mutationFn: (payload: LoginRequest) => authApi.login(payload),
  });
