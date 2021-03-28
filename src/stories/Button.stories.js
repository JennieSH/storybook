import Button from "./Button.vue";
// export default {
//   component: Button,
//   title: "Components/Button",
//   argTypes: {
//     backgroundColor: { control: "color" },
//     size: { control: { type: "select", options: ["small", "medium", "large"] } },
//   },
// };

// // const Template = (args, { argTypes }) => ({
// //   props: Object.keys(argTypes),
// //   components: { MyButton },
// //   template: '<my-button @onClick="onClick" v-bind="$props" />',
// // });

// //👇 We create a “template” of how args map to rendering
// const Template = (args, { argTypes }) => ({
//   components: { Button },
//   props: Object.keys(argTypes),
//   setup() {
//     //👇 The args will now be passed down to the template
//     return { args };
//   },
//   template: "<Button v-bind='$props'/>",
// });

// //👇 Each story then reuses that template
// export const Primary = Template.bind({});
// YourComponent.stories.js

//👇 This default export determines where your story goes in the story list
export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    background: { control: { type: "color" } },
  },
};

const Template = (args, { argTypes }) => ({
  components: { Button },
  props: Object.keys(argTypes),
  // setup() {
  //   return { args };
  // },
  template: '<Button :background="background" />',
});

//👇 Each story then reuses that template
export const Primary = Template.bind({});
Primary.args = { background: "#fd0ss" };
