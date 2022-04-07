module.exports = {
  presets: [
    '@babel/preset-env',
    '@babel/preset-react',
    '@emotion/babel-preset-css-prop',
    '@babel/preset-typescript'
  ],
  plugins: [
    '@emotion/babel-plugin',
    'babel-plugin-macros',
    '@babel/plugin-syntax-flow',
    'react-require'
  ]
}
