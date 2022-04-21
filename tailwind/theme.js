module.exports = {
  screens: {
    xxs: '375px',
    xs: '480px',
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    xxl: '1400px',
    xxxl: '1720px'
  },
  fontFamily: {
    display: ['Clash Display', 'sans-serif'],
    sans: ['Rubik', 'Arial', 'sans-serif']
  },
  fontSize: {
    caption: {
      'sm-desktop': { fontSize: '0.75rem', lineHeight: '140%' },
      'sm-mobile': { fontSize: '0.625rem', lineHeight: '140%' },
      'md-desktop': { fontSize: '0.875rem', lineHeight: '140%' },
      'md-mobile': { fontSize: '0.75rem', lineHeight: '140%' },
      'lg-desktop': { fontSize: '1rem', lineHeight: '140%' },
      'lg-mobile': { fontSize: '0.875rem', lineHeight: '140%' }
    },
    body: {
      'sm-desktop': { fontSize: '1.125rem', lineHeight: '140%' },
      'sm-mobile': { fontSize: '1rem', lineHeight: '140%' },
      'md-desktop': { fontSize: '1.25rem', lineHeight: '140%' },
      'md-mobile': { fontSize: '1.125rem', lineHeight: '140%' },
      'lg-desktop': { fontSize: '2.25rem', lineHeight: '140%' },
      'lg-mobile': { fontSize: '1.5rem', lineHeight: '140%' }
    },
    heading: {
      'sm-desktop': { fontSize: '1.25rem', lineHeight: '120%' },
      'md-desktop': { fontSize: '1.5rem', lineHeight: '120%' },
      'lg-desktop': { fontSize: '2.25rem', lineHeight: '120%' },
      'lg-tablet': { fontSize: '1.75rem', lineHeight: '120%' },
      'lg-mobile': { fontSize: '1.625rem', lineHeight: '120%' },
      'xl-desktop': { fontSize: '3.75rem', lineHeight: '120%' },
      'xl-tablet': { fontSize: '2.25rem', lineHeight: '120%' },
      'xl-mobile': { fontSize: '2rem', lineHeight: '120%' }
    },
    display: {
      'sm-desktop': { fontSize: '2.5rem', lineHeight: '120%' },
      'sm-mobile': { fontSize: '2.25rem', lineHeight: '120%' },
      'lg-desktop': { fontSize: '5rem', lineHeight: '120%' },
      'lg-tablet': { fontSize: '3.75rem', lineHeight: '120%' },
      'lg-mobile': { fontSize: '2.5rem', lineHeight: '120%' }
    },
    button: {
      sm: ['0.75rem', '1rem'],
      md: ['1.125rem', '1.125rem'],
      lg: ['1.25rem', '1.5rem'],
      xl: ['1.375rem', '1.5rem']
    }
  },
  fontWeight: {
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700
  },
  transitionDuration: {
    base: '75ms',
    slow: '150ms',
    slowest: '500ms'
  },
  transitionDelay: {
    base: '150ms',
    slow: '300ms'
  },
  extend: {
    colors: {
      primary: {
        DEFAULT: '#6560BD',
        light: '#857ED9',
        dark: '#5C509F'
      },
      secondary: {
        DEFAULT: '#FFFFFF',
        dark: '#d6d6d6'
      },
      neutral: {
        DEFAULT: '#0E0E0E',
        dark: '#000000',
        charcoal: '#181818',
        ash: '#353535',
        stone: '#505050',
        silver: '#B0B0B0'
      },
      system: {
        success: '#65EE9C',
        warning: '#e4e44f',
        error: '#ED5088',
        info: '#69C0CA'
      }
    },
    borderRadius: {
      card: '2rem',
      DEFAULT: '0.1875rem'
    },
    zIndex: {
      header: 10,
      'mobile-menu': 9,
      modal: 30,
      cookies: 40,
      offlineDetector: 50,
      'next-progress': 51,
      popper: 60,
      tooltip: 70
    },
    maxWidth: {
      modal: {
        xs: '30rem',
        md: '35rem',
        lg: '45rem',
        xl: '72rem'
      },
      header: '90rem',
      newsletter: '48.5rem'
    },
    boxShadow: {
      'glow-sm': '0 0 0.625rem 0 #ffffff',
      'glow-lg': '0 0 1rem 0 #ffffff'
    }
  }
}
