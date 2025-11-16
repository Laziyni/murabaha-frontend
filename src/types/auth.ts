export type LoginRequest = {
  username: string;
  password: string;
};

export type LoginResponse = {
  accessToken: string;
  refreshToken?: string;
  expiresIn?: number;
  tokenType?: string;
};
