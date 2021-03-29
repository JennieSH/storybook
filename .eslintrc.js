module.exports = {
  extends: ["plugin:vue/recommended", "@vue/typescript"],
  rules: {
    quotes: ["error", "double"],
    indent: ["error", 2],
    "max-len": ["error", { code: 200 }],
  },
};
