const HtmlWebpackPlugin = require('html-webpack-plugin');
const OpenBrowserPlugin = require('open-browser-once-plugin');

module.exports = {
  mode: 'production',
  entry: './main.js',
  output: {
    filename: 'bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'webpack-demo8',
      filename: 'index.html',
    }),
    new OpenBrowserPlugin.OpenBrowserOncePlugin('http://localhost:8888'),
  ],
};
