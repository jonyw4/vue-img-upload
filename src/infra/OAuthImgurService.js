import qs from "qs";

const IMGUR_CLIENT_ID = process.env.VUE_APP_IMGUR_CLIENT_ID;
const IMGUR_API = "https://api.imgur.com";

export class OAuthImgurService {
  constructor(authRepository) {
    this.authRepository = authRepository;
  }
  getLoginAuthUrl() {
    const params = {
      client_id: IMGUR_CLIENT_ID,
      response_type: "token",
    };
    const queryString = qs.stringify(params);
    return `${IMGUR_API}/oauth2/authorize?${queryString}`;
  }
  finalizeLoginAuth(url) {
    const token = this.getTokenFromUrl(url);
    return this.authRepository.saveToken(token);
  }
  logout() {
    return this.authRepository.removeToken();
  }
  isLogged() {
    return this.authRepository.hasToken();
  }
  getTokenFromUrl(url) {
    const hash = url.replace("#", "");
    const queryParams = qs.parse(hash);
    return queryParams["access_token"];
  }
}
