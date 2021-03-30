const path = require("path");
module.exports = {
  // 自訂的Webpack設定
  webpackFinal: async (config, { configType }) => {
    // configType has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.
    // Make whatever fine-grained changes you need
    config.resolve.alias = {
      ...config.resolve.alias,
      "~@": path.resolve(__dirname, "../src/"),
    };
    config.module.rules.push({
      test: /\.scss$/,
      use: [
        "style-loader",
        "css-loader",
        "postcss-loader",
        {
          loader: "sass-loader",
          options: {
            //   prependData: @import "${path.resolve(__dirname, '../src/assets/style/config/_index.scss')}";
          },
        },
      ],
      include: path.resolve(__dirname, "../"),
    });
    // Return the altered config
    return config;
  },
  // story files 放置的位置
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  // 設定要使用的addons清單
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    // '@storybook/preset-scss',
    // "@storybook/addon-knobs",
  ],
};
