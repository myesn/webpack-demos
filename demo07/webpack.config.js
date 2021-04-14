const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './main.js',
  output: {
    filename: 'bundle.js',
  },
  // plugins: [new UglifyJsPlugin()],
  optimization: {
    minimizer: [new UglifyJsPlugin()]
  }
};
