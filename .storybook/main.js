// module.exports = {
//   "stories": [
//     "../src/**/*.stories.mdx",
//     "../src/**/*.stories.@(js|jsx|ts|tsx)"
//   ],
//   "addons": [
//     "@storybook/addon-links",
//     "@storybook/addon-essentials"
//   ]
// }

const path = require("path");
module.exports = {
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
  stories: [
    // "../src/*/.stories.mdx",
    // "../src/*/.stories.@(js|jsx|ts|tsx)",
    // "../src/*/variables/.stories.@(js|jsx|ts|tsx)",
    // "../src/*/components/.stories.@(js|jsx|ts|tsx)",
    // "../src/*/containers/.stories.@(js|jsx|ts|tsx)",
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    // '@storybook/preset-scss',
    "@storybook/addon-knobs",
  ],
};
