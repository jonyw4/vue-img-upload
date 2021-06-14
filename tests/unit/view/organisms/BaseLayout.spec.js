import { mount } from "@vue/test-utils";
import BaseLayout from "../../../../src/view/organisms/BaseLayout.vue";

describe("view :: organisms :: BaseLayout", () => {
  const wrapper = mount(BaseLayout, {
    slots: {
      default: "<h1>Hello World</h1>",
    },
  });
  it("should render base layout with success", async () => {
    const helloWorld = wrapper.find("h1");
    expect(helloWorld.text()).toBe("Hello World");
  });
});
