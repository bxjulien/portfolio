const path = require('path');
const nextTranslate = require('next-translate');

module.exports = nextTranslate({
  reactStrictMode: true,
  env: {
    HEROTOFU_FORM_ENDPOINT: process.env.HEROTOFU_FORM_ENDPOINT,
  }
});