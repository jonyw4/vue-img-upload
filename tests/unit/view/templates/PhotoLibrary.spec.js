import { mount } from "@vue/test-utils";
import wait from "wait";
import PhotoLibrary from "../../../../src/view/templates/PhotoLibrary.vue";
import { OAuthFakeService, PhotoFakeService } from "../../../../src/infra";

describe("view :: templates :: PhotoLibrary", () => {
  const photoService = new PhotoFakeService();
  const oauthService = new OAuthFakeService();

  let wrapper;
  beforeEach(() => {
    wrapper = mount(PhotoLibrary, {
      provide: {
        photoService: photoService,
        oauthService: oauthService,
      },
    });
  });
  function getLoadingSection() {
    return wrapper.find("#loading");
  }
  function getNextPageBtn() {
    return wrapper.find("#nextPageBtn");
  }
  function getBeforePageBtn() {
    return wrapper.find("#nextPageBtn");
  }
  function getPaginationPage() {
    return wrapper.find(".pagination-page");
  }
  it("should render an photo library component", async () => {
    const title = wrapper.find("h1");
    const paginationPage = getPaginationPage();
    expect(title.text()).toBe("Photo Library");
    expect(paginationPage.text()).toBe("1");
  });
  it("should try to go to the next and before page", async () => {
    let paginationPage;
    let loadingSection;

    const nextPageBtn = getNextPageBtn();
    nextPageBtn.trigger("click");

    loadingSection = getLoadingSection();
    expect(loadingSection.text()).toBe("Loading...");

    wait(300);
    paginationPage = getPaginationPage();
    expect(paginationPage.text()).toBe("1");

    const beforePageBtn = getBeforePageBtn();
    beforePageBtn.trigger("click");

    loadingSection = getLoadingSection();
    expect(loadingSection.text()).toBe("Loading...");

    paginationPage = getPaginationPage();
    expect(paginationPage.text()).toBe("1");

    wait(300);
    paginationPage = getPaginationPage();
  });
});
