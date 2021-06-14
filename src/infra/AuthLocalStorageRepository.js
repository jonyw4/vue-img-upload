export class AuthLocalStorageRepository {
  saveToken(token) {
    return localStorage.setItem("token", token);
  }
  removeToken() {
    return localStorage.removeItem("token");
  }
  hasToken() {
    return !!localStorage.token;
  }
}
