import { IMGUR_API } from "../../consts";

export function createImgurHttpClient(HttpClient) {
  return new HttpClient(IMGUR_API);
}
