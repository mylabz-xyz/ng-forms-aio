module.exports = {
  "stories": [
    "../projects/ng-aio-forms-website/src/stories/*.stories.ts"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "storybook-ng-source-addon",
    "storybook/addon-actions",
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


