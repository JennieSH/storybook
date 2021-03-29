import Vue from "vue";
import VueCompositionApi from "@vue/composition-api";
// import "tailwindcss/tailwind.css";

Vue.use(VueCompositionApi);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    expanded: true,
  },
  backgrounds: {
    values: [{ name: "dark", value: "#FAFBFC" }],
  },
};
