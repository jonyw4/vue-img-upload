import { mount } from "@vue/test-utils";
import Button from "../../../../src/view/atoms/Button.vue";

describe("view :: atoms :: Button", () => {
  it("should render the button properly", () => {
    const wrapper = mount(Button, {
      slots: {
        default: "Click me",
      },
    });
    const button = wrapper.find("button");
    expect(button.text()).toBe("Click me");
  });
  it("should emit click event when click on the button", async () => {
    const wrapper = mount(Button, {
      slots: {
        default: "Click me",
      },
    });
    const button = wrapper.find("button");
    await button.trigger("click");
    expect(wrapper.emitted().click).toBeTruthy();
  });
});
