const LOCAL_STORAGE_TOKEN_KEY = "token";

export class AuthLocalStorageRepository {
  saveToken(token) {
    return localStorage.setItem(LOCAL_STORAGE_TOKEN_KEY, token);
  }
  removeToken() {
    return localStorage.removeItem(LOCAL_STORAGE_TOKEN_KEY);
  }
  hasToken() {
    return !!localStorage.getItem(LOCAL_STORAGE_TOKEN_KEY);
  }
}
