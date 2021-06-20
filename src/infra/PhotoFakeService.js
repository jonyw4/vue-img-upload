import wait from "wait";

export class PhotoFakeService {
  constructor(httpClient) {
    this.httpClient = httpClient;
  }
  async getList() {
    await wait(250);
    return {
      pagination: {
        page: 1,
        pageSize: 10,
        totalItems: 100,
        totalPages: 10,
      },
      data: [{ url: "http://test", id: 1 }],
    };
  }
}
