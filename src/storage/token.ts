const TOKEN_NAME = 'six-cities-token';

export type Token = string;

export function getToken(): Token | null {
  const token = localStorage.getItem(TOKEN_NAME);
  return token;
}

export function writeToken(token?: Token): void {
  if (token) {
    localStorage.setItem(TOKEN_NAME, token);
  } else {
    localStorage.removeItem(TOKEN_NAME);
  }
}
