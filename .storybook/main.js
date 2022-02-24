const path = require('path')

module.exports = {
  stories: [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    '@storybook/addon-storysource',
    {
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss')
        }
      }
    }
  ],
  webpackFinal: async (config) => {
    config.module.rules[0].use[0].options.presets = [
      require.resolve('@babel/preset-env'),
      require.resolve('@babel/preset-typescript'),
      [
        require.resolve('@babel/preset-react'),
        {
          runtime: 'automatic',
          importSource: '@emotion/react'
        }
      ]
    ]

    config.module.rules[0].use[0].options.plugins = [
      ...config.module.rules[0].use[0].options.plugins,
      '@emotion/babel-plugin'
    ]

    config.resolve.alias = {
      ...config.resolve.alias,
      'components': path.resolve(__dirname, '../src/components')
    }

    return config
  },
  framework: "@storybook/react",
  core: {
    builder: "webpack5"
  }
}
