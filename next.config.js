const path = require('path');

const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, '/styles')],
    prependData: `@use 'variables' as *;`
  },
}

module.exports = nextConfig
