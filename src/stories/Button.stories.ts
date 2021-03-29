import Button from "./Button.vue";
// import { Story, Meta } from "@storybook/vue/types-6-0";
import { Story, Meta } from "../types/StoryBookTypes";
import { ButtonProps, ButtonSize } from "./ButtonType";

// 👇 This default export determines where your story goes in the story list
export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    background: {
      control: { type: "color" },
      table: {
        // title of Docs table, default as 'PROPS'
        category: "Colors",
      },
    },
    size: {
      // control 用法: https://storybook.js.org/docs/vue/essentials/controls
      control: { type: "select", options: Object.values(ButtonSize) },
      table: {
        category: "Sizes",
      },
    },
  },
} as Meta<ButtonProps>;

const Template: Story<ButtonProps> = (args, { argTypes }) => ({
  components: { Button },
  props: Object.keys(argTypes),
  // https://github.com/storybookjs/storybook/issues/11051
  // setup() {
  //   return { args };
  // },
  template: "<Button :background=\"background\" :title=\"title\" :size=\"size\" :rounded=\"rounded\"/>",
});

// 👇 Each story then reuses that template
export const Primary = Template.bind({});
Primary.args = {
  background: "#000",
  title: "this is a button",
  size: "sm",
  rounded: false,
};
