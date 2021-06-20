export class OAuthFakeService {
  constructor(authRepository) {
    this.authRepository = authRepository;
  }
  getLoginAuthUrl() {
    return `localhost`;
  }
  finalizeLoginAuth() {}
  logout() {}
  isLogged() {
    return false;
  }
}
