const withPlugins = require('next-compose-plugins')
const withImages = require('next-images')
const { nextI18NextRewrites } = require('next-i18next/rewrites')

const localeSubpaths = {}

const originalConfig = {
  rewrites: async () => nextI18NextRewrites(localeSubpaths),
  publicRuntimeConfig: {
    localeSubpaths,
  },
}

module.exports = withPlugins([
  [
    {
      target: 'serverless',
      pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
    },
  ],
  withImages,
  originalConfig,
])
