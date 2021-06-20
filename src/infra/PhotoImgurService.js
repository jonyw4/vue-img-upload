export class PhotoImgurService {
  constructor(httpClient) {
    this.httpClient = httpClient;
  }
  async getList(page, limit) {
    const data = this.httpClient.get("/3/account/me/images", {
      limit,
      page,
    });
    return {
      pagination: {},
      data: data.map((item) => ({
        id: item.id,
        name: item.name,
        url: item.link,
      })),
    };
  }
}
