const { colors: defaultColors } = require("tailwindcss/defaultTheme");
const customColors = require("./src/assets/style.ts");

const colors = {
  ...defaultColors,
  ...customColors,
};

module.exports = {
  purge: { content: ["./public/**/*.html", "./src/**/*.vue"] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: colors,
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: ["./components/**/*.{vue,js,ts}", "./stories/**/*.{vue,js,ts}"],

  options: {
    shadowLookup: true, // Should be official feature now
  },
  experiments: {
    shadowLookup: true, // Added just in case
  },
};
