import { AuthLocalStorageRepository } from "../../../src/infra/AuthLocalStorageRepository";
describe("infra :: AuthLocalStorageRepository", () => {
  let authRepository;

  beforeEach(() => {
    authRepository = new AuthLocalStorageRepository();
  });
  it("should save a token with success", () => {
    Storage.prototype.setItem = jest.fn(() => true);
    authRepository.saveToken("1234");
  });
  it("should remove a token with success", () => {
    Storage.prototype.removeItem = jest.fn(() => true);
    authRepository.removeToken();
  });
  it("should return true when has token", () => {
    Storage.prototype.removeItem = jest.fn(() => true);
    authRepository.removeToken();
  });
  it("should return false when doesn't have token", () => {
    Storage.prototype.removeItem = jest.fn(() => true);
    authRepository.removeToken();
  });
});
