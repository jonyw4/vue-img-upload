import { mount } from "@vue/test-utils";
import Header from "../../../../src/view/organisms/Header.vue";

describe("view :: organisms :: Header", () => {
  describe("not logged", () => {
    const wrapper = mount(Header, {
      propsData: {
        isLogged: false,
      },
    });
    const loginBtn = wrapper.find("#login");
    const signUpBtn = wrapper.find("#signup");
    it("should emit an event when click on login btn", async () => {
      await loginBtn.trigger("click");
      expect(wrapper.emitted().clickLoginBtn).toBeTruthy();
    });

    it("should emit an event when click on login btn", async () => {
      await signUpBtn.trigger("click");
      expect(wrapper.emitted().clickSignUpBtn).toBeTruthy();
    });
  });
  describe("logged", () => {
    const wrapper = mount(Header, {
      propsData: {
        isLogged: true,
      },
    });
    const logoutBtn = wrapper.find("#logout");
    it("should emit an event when click on logout btn", async () => {
      await logoutBtn.trigger("click");
      expect(wrapper.emitted().clickLogoutBtn).toBeTruthy();
    });
  });
});
