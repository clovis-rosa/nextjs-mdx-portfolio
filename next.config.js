const withLinaria = require('next-with-linaria')

/** @type {import('next-with-linaria').LinariaConfig} */

const config = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
    modularizeImports: {
      'react-icons': {
        transform: 'react-icons/{{member.name}}',
      },
    },
  },
  images: {
    formats: ['image/webp', 'image/avif'],
  },
}

module.exports = withLinaria(config)
