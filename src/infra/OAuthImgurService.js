import qs from "qs";
import { IMGUR_API, IMGUR_CLIENT_ID } from "../consts";

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
  finalizeLoginAuth(hashQueryString) {
    const token = this.getTokenFromHashQueryString(hashQueryString);
    this.authRepository.saveToken(token);
  }
  logout() {
    this.authRepository.removeToken();
  }
  isLogged() {
    return this.authRepository.hasToken();
  }
  getTokenFromHashQueryString(hashQueryString) {
    const hash = hashQueryString.replace("#", "");
    const queryParams = qs.parse(hash);
    return queryParams["access_token"];
  }
}
