import axios, { AxiosError } from 'axios';
import { API_BASE_URL } from '@/config';

const normalizedBaseUrl = API_BASE_URL?.replace(/\/$/, '') ?? '';

export const httpClient = axios.create({
  baseURL: normalizedBaseUrl || undefined,
  withCredentials: true,
  timeout: 15000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

export type ApiErrorResponse = {
  statusCode?: number;
  message?: string | string[];
  error?: string;
  timestamp?: string;
};

export const getApiErrorMessage = (error: unknown): string => {
  if (axios.isAxiosError<ApiErrorResponse>(error)) {
    const serverMessage = error.response?.data?.message;
    if (Array.isArray(serverMessage)) {
      return serverMessage.join('\n');
    }
    if (serverMessage) {
      return serverMessage;
    }
    return error.message;
  }
  if (error instanceof Error) {
    return error.message;
  }
  return 'Request failed. Please try again later.';
};

export const isAxiosError = <T = unknown>(
  error: unknown
): error is AxiosError<T> => axios.isAxiosError(error);
