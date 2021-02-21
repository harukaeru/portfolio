module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    rotate: {
      '0': '0',
      '90': '90deg',
      '180': '180deg',
      '270': '270deg',
    },
    extend: {
      typography: {
        xl: {
          css: {
            'ul > li': {
              paddingLeft: '1.3em',
            },
          },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
}
