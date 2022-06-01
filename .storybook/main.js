const path = require('path')
module.exports = {
  "stories": [
    "../projects/ng-forms-aio-website/src/stories/*.stories.ts"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    {
      name: '@storybook/addon-storysource',
      options: {
        loaderOptions: {
          injectStoryParameters: false,
          prettierConfig: { printWidth: 80, singleQuote: false },
        },
        rule: {
           test: [/\.stories\.ts?$/],
          include: [path.resolve(__dirname, '../projects/ng-forms-aio-website/src/stories')], // You can specify directories
        },
      },
    },
  ],
  "framework": "@storybook/angular",
  "core": {
    "builder": "webpack5"
  },
  webpackFinal:function (config, { presets }) {
    const version = presets.apply('webpackVersion');
    const instance = (presets.apply('webpackInstance'))?.default;

    console.log(`=> Running in webpack ${version}: ${instance}`);
    return config;
  }
}


