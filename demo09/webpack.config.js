const webpack = require('webpack');
const devFlagPlugin = new webpack.DefinePlugin({
  __DEV__: JSON.stringify(JSON.parse(process.env.DEBUG || 'false')),
});

module.exports = {
  mode: 'production',
  entry: './main.js',
  output: {
    filename: 'bundle.js',
  },
  plugins: [devFlagPlugin],
};
