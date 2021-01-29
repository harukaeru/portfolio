const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
})
const { nextI18NextRewrites } = require('next-i18next/rewrites')

const localeSubpaths = {}

// module.exports = withMDX()
// console.log('withMDX', withMDX())
//
const originalConfig = {
  rewrites: async () => nextI18NextRewrites(localeSubpaths),
  publicRuntimeConfig: {
    localeSubpaths,
  },
  // pageExtensions: ['ts', 'tsx', 'mdx']
}

module.exports = {
  ...withMDX({
    pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx']
  }),
  ...originalConfig,
}
