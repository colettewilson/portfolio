const path = require('path')
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer({
  images: {
    domains: ['cdn.sanity.io'],
  },
  // I'm not certain what this does, but the tailwindcss.com site uses it – Simeon
  experimental: {
    modern: true,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'src')],
    prependData: `@import "_global/variables.scss";`,
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Note: we provide webpack above so you should not `require` it
    // Perform customizations to webpack config
    config.plugins.push(new webpack.IgnorePlugin(/\/__tests__\//))
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })

    // Important: return the modified config
    return config
  },
  target: 'serverless',
})