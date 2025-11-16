import { httpClient } from '@/lib/http-client';
import { LoginRequest, LoginResponse } from '@/types/auth';

export const authApi = {
  async login(payload: LoginRequest) {
    const { data } = await httpClient.post<LoginResponse>(
      '/auth/login',
      payload
    );
    return data;
  },
};
