const theme = require('./tailwind/theme')
const plugins = require('./tailwind/plugins')

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme,
  plugins
}
