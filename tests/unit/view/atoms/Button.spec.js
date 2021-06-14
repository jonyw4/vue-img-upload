import { mount } from "@vue/test-utils";
import Button from "../../../../src/view/atoms/Button.vue";

describe("view :: atoms :: Button", () => {
  it("should render a button properly", () => {
    const wrapper = mount(Button, {
      slots: {
        default: "Click me",
      },
    });
    const button = wrapper.find("button");
    expect(button.text()).toBe("Click me");
  });
  it("should render a button with 'a' element properly", () => {
    const wrapper = mount(Button, {
      slots: {
        default: "Click me",
      },
      propsData: {
        component: "a",
        href: "localhost",
      },
    });
    const button = wrapper.find("a");
    expect(button.text()).toBe("Click me");
  });
  it("should emit click event when click on the button", async () => {
    const handleClick = jest.fn();
    const wrapper = mount(Button, {
      listeners: {
        click: handleClick,
      },
      slots: {
        default: "Click me",
      },
    });
    const button = wrapper.find("button");
    await button.trigger("click");
    expect(handleClick).toHaveBeenCalled();
  });
});
