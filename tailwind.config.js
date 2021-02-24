module.exports = {
  purge: {
    content: [
      "./**/*.{ts,tsx,jsx,css}",
      "./node_modules/**/*"
    ],
  },
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
