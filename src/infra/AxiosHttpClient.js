import axios from "axios";

export class AxiosHttpClient {
  constructor(baseURL, headers) {
    this.axios = axios.create({
      baseURL,
      headers,
    });
  }
  get(url, params = {}) {
    return this.axios.get(url, {
      params,
    });
  }
}
