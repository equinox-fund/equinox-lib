const theme = require('./theme.json')

const { colors, fontFamily, fontSize, fontWeight, borderRadius } = theme

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    screens: {
      xxs: '375px',
      xs: '480px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      xxl: '1400px',
      xxxl: '1720px',
    },
    fontFamily,
    fontSize,
    fontWeight,
    transitionDuration: {
      base: '75ms',
      slow: '150ms',
      slowest: '500ms',
    },
    transitionDelay: {
      base: '150ms',
      slow: '300ms',
    },
    extend: {
      colors,
      borderRadius,
      zIndex: {
        header: 10,
        'mobile-menu': 9,
        modal: 30,
        cookies: 40,
        offlineDetector: 50,
        'next-progress': 51,
        popper: 60,
        tooltip: 70,
      },
      maxWidth: {
        modal: {
          xs: '30rem',
          md: '35rem',
          lg: '45rem',
        },
        header: '90rem',
        newsletter: '48.5rem',
      },
      boxShadow: {
        'glow-sm': '0 0 0.625rem 0 #ffffff',
        'glow-lg': '0 0 1rem 0 #ffffff',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    function ({ addBase, addComponents, config }) {
      addBase({
        '.text-caption-sm': {
          ...config('theme.fontSize.caption.sm-mobile'),
          '@screen md': config('theme.fontSize.caption.sm-desktop'),
        },
        '.text-caption-md': {
          ...config('theme.fontSize.caption.md-mobile'),
          '@screen md': config('theme.fontSize.caption.md-desktop'),
        },
        '.text-caption-lg': {
          ...config('theme.fontSize.caption.lg-mobile'),
          '@screen md': config('theme.fontSize.caption.lg-desktop'),
        },
        '.text-body-sm': {
          ...config('theme.fontSize.body.sm-mobile'),
          '@screen md': config('theme.fontSize.body.sm-desktop'),
        },
        '.text-body-md': {
          ...config('theme.fontSize.body.md-mobile'),
          '@screen md': config('theme.fontSize.body.md-desktop'),
        },
        '.text-body-lg': {
          ...config('theme.fontSize.body.lg-mobile'),
          '@screen md': config('theme.fontSize.body.lg-desktop'),
        },
        '.text-heading-sm': {
          ...config('theme.fontSize.heading.sm-desktop'),
          fontFamily: "'Clash Display', sans-serif",
        },
        '.text-heading-md': {
          ...config('theme.fontSize.heading.md-desktop'),
          fontFamily: "'Clash Display', sans-serif",
        },
        '.text-heading-lg': {
          ...config('theme.fontSize.heading.lg-mobile'),
          fontFamily: "'Clash Display', sans-serif",
          '@screen lg': config('theme.fontSize.heading.lg-desktop'),
          '@screen md': config('theme.fontSize.heading.lg-tablet'),
        },
        '.text-heading-xl': {
          ...config('theme.fontSize.heading.xl-mobile'),
          fontFamily: "'Clash Display', sans-serif",
          '@screen lg': config('theme.fontSize.heading.xl-desktop'),
          '@screen md': config('theme.fontSize.heading.xl-tablet'),
        },
        '.text-display-sm': {
          ...config('theme.fontSize.display.sm-mobile'),
          fontFamily: "'Clash Display', sans-serif",
          '@screen md': config('theme.fontSize.display.sm-desktop'),
        },
        '.text-display-lg': {
          ...config('theme.fontSize.display.lg-mobile'),
          fontFamily: "'Clash Display', sans-serif",
          '@screen lg': config('theme.fontSize.display.lg-desktop'),
          '@screen md': config('theme.fontSize.display.lg-tablet'),
        },
        '.bg-gradient': {
          background:
            'linear-gradient(90deg, rgba(101, 96, 189, 1) 0%, rgba(105, 192, 202, 1) 100%)',
        },
        '.text-gradient': {
          background:
            'linear-gradient(90deg, rgba(101, 96, 189, 1) 0%, rgba(105, 192, 202, 1) 100%)',
          '-webkit-background-clip': 'text',
          'background-clip': 'text',
          color: 'transparent',
          'clip-path': 'inset(0 1px 0 0)',
          '-webkit-text-fill-color': 'transparent',
        },
      })
      addComponents({
        '.container': {
          paddingLeft: '1rem',
          paddingRight: '1rem',
          margin: '0 auto 5rem',

          '@screen xxs': {
            paddingLeft: '1.5rem',
            paddingRight: '1.5rem',
            maxWidth: 'none',
          },
          '@screen md': {
            paddingLeft: '2rem',
            paddingRight: '2rem',
            maxWidth: 'none',
          },
          '@screen xxl': {
            paddingLeft: '5rem',
            paddingRight: '5rem',
            maxWidth: '100rem',
          },
        },
      })
    },
  ],
}
