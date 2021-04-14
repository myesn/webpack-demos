const webpack = require('webpack');

module.exports = {
  mode: 'production',
  entry: {
    app: './main.js',
    // vendor: ['jquery'],
  },
  output: {
    filename: 'bundle.js',
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    })
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          filename: 'vendor.js',
          chunks: 'all',
        },
      },
    },
  },
};
