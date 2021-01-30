const withPlugins = require('next-compose-plugins');
const withImages = require('next-images')
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

module.exports = withPlugins([
  [
    withMDX, {
      pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx']
    }
  ],
  withImages,
  originalConfig,
])
