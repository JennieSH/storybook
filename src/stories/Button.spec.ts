import Vue, { VueConstructor } from "vue";
import CompositionApi from "@vue/composition-api";
import { expect } from "chai";
import { mount, Wrapper, createLocalVue } from "@vue/test-utils";
import { ButtonProps, ButtonSize } from "./ButtonType";
import Button from "./Button.vue";
const localVue: VueConstructor<Vue> = createLocalVue();
localVue.use(CompositionApi);

class PropsData {
  private initial = {
    background: "#000",
    title: "this is a button",
    size: "sm",
    rounded: false,
  };
  public state = {};
  constructor(data?: ButtonProps) {
    this.state = Object.assign({}, { ...this.initial, ...data });
  }
}

describe("Button.vue", () => {
  const propsData = new PropsData().state;
  const wrapper: Wrapper<Vue> = mount(Button, {
    localVue,
    propsData,
  });

  it("text correctly", () => {
    const button = wrapper.find("button");
    expect(button.text()).to.equal("this is a button");
  });

  wrapper.setProps({ size: ButtonSize.LG });

  it("when selecting size", () => {
    const button = wrapper.find("button");
    expect(button.classes("btn--lg")).to.equal(true);
  });
});
