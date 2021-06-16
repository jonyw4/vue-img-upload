import { OAuthImgurService } from "../../../src/infra";
describe("infra :: OAuthImgurService", () => {
  const hashQueryString =
    "#access_token=ACCESS_TOKEN&token_type=Bearer&expires_in=3600";
  let mockedAuthRepository;
  let oauthService;

  beforeEach(() => {
    mockedAuthRepository = {
      saveToken: jest.fn(),
      removeToken: jest.fn(),
      hasToken: jest.fn(),
    };
    oauthService = new OAuthImgurService(mockedAuthRepository);
  });

  it("should get login auth url", () => {
    const loginAuthUrl = oauthService.getLoginAuthUrl();

    expect(loginAuthUrl).toBe(
      "https://api.imgur.com/oauth2/authorize?response_type=token"
    );
  });
  it("should finalize login auth", () => {
    oauthService.finalizeLoginAuth(hashQueryString);

    expect(mockedAuthRepository.saveToken).toBeCalled();
  });
  it("should logout", () => {
    oauthService.logout();

    expect(mockedAuthRepository.removeToken).toBeCalled();
  });
  it("should check if is logged", () => {
    mockedAuthRepository.hasToken.mockReturnValue(true);
    const isLogged = oauthService.isLogged();

    expect(mockedAuthRepository.hasToken).toBeCalled();
    expect(isLogged).toBe(true);
  });
  it("should get token from hash query string", () => {
    const token = oauthService.getTokenFromHashQueryString(hashQueryString);
    expect(token).toBe("ACCESS_TOKEN");
  });
});
