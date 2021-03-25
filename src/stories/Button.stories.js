// import MyButton from './Button.vue';

// export default {
//   title: 'Example/Button',
//   component: MyButton,
//   argTypes: {
//     backgroundColor: { control: 'color' },
//     size: { control: { type: 'select', options: ['small', 'medium', 'large'] } },
//   },
// };

// const Template = (args, { argTypes }) => ({
//   props: Object.keys(argTypes),
//   components: { MyButton },
//   template: '<my-button @onClick="onClick" v-bind="$props" />',
// });

// export const Primary = Template.bind({});
// Primary.args = {
//   primary: true,
//   label: 'Button',
// };

// export const Secondary = Template.bind({});
// Secondary.args = {
//   label: 'Button',
// };

// export const Large = Template.bind({});
// Large.args = {
//   size: 'large',
//   label: 'Button',
// };

// export const Small = Template.bind({});
// Small.args = {
//   size: 'small',
//   label: 'Button',
// };
import Button from "./Button.vue";

export default {
  component: Button,
  title: "Components/Button",
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => ({
  components: { Button },
  setup() {
    //👇 The args will now be passed down to the template
    return { args };
  },
  template: '<Button v-bind="args" />',
});

//👇 Each story then reuses that template
export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: "Primary",
};
