const withLinaria = require('next-with-linaria')

/** @type {import('next-with-linaria').LinariaConfig} */

const config = {
  reactStrictMode: true,
  swcMinify: true,
  modularizeImports: {
    'react-icons': {
      transform: 'react-icons/{{member}}',
    },
  },
  experimental: {
    appDir: true,
    // typedRoutes: true,
  },
  images: {
    formats: ['image/webp', 'image/avif'],
  },
}

module.exports = withLinaria(config)
