const variables = require('./postcss.variables.js')
const mixins = require('./postcss.mixins.js')
const media = require('./postcss.media.js')
const selectors = require('./postcss.selectors.js')

module.exports = {
  plugins: {
    'postcss-import': {},
    'postcss-each': {},
    'postcss-mixins': { mixins },
    'postcss-simple-vars': { variables },
    'postcss-nested': {},
    'postcss-custom-selectors': { ...selectors },
    'postcss-custom-media': { ...media },
    'postcss-font-family-system-ui': {},
    'postcss-color-function': {},
    'autoprefixer': {}
  }
}
