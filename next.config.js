const path = require('path');

const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, '/styles')],
    prependData: `@use 'variables' as *;`
  },
  env: {
    HEROTOFU_FORM_ENDPOINT: process.env.HEROTOFU_FORM_ENDPOINT,
  }
}

module.exports = nextConfig
