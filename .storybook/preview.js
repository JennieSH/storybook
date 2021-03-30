import Vue from "vue";
import VueCompositionApi from "@vue/composition-api";
// import "tailwindcss/tailwind.css";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";

Vue.use(VueCompositionApi);

// 定義 Stories 的靜態 metadata
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    expanded: true,
  },
  backgrounds: {
    values: [{ name: "dark", value: "#FAFBFC" }],
  },
  // 預設使用的是 MINIMAL_VIEWPORTS
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
};
