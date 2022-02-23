const theme = require('./tailwind/theme')
const plugins = require('./tailwind/plugins')

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  theme,
  plugins,
}
