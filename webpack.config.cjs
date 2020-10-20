const path = require('path');

/**
 * Have fun bro.
 */

module.exports = {
  entry: './src/assets/index.js',

  output: {
    path: path.resolve(__dirname, './src/static/dist'),
    filename: 'bundle.js'
  },

  mode: 'development'
};