const path = require('path');
const nextTranslate = require('next-translate');

module.exports = nextTranslate({
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, '/styles')],
    prependData: `@use 'variables' as *;`
  },
  env: {
    HEROTOFU_FORM_ENDPOINT: process.env.HEROTOFU_FORM_ENDPOINT,
  }
});