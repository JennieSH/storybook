module.exports = {
  extends: ["plugin:vue/recommended", "@vue/typescript"],
  rules: {
    quotes: ["error", "double"],
    indent: ["error", 2],
    "max-len": ["error", { code: 200 }],
    // @fixable 必須使用 === 或 !==，禁止使用 == 或 !=，與 null 比較時除外
    "vue/eqeqeq": [2, "always", { null: "ignore" }],
    "no-unused-expressions": [
      "error",
      {
        allowShortCircuit: false,
        allowTernary: false,
        allowTaggedTemplates: false,
      },
    ],
  },
  parserOptions: {
    parser: "@typescript-eslint/parser",
  },
};
