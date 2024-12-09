export interface User {
  name: string;
  avatarUrl: string;
  isPro: boolean;
}

export interface AuthorizedUser extends User {
  email: string;
  token: string;
}

export interface AuthData {
  email: string;
  password: string;
}
