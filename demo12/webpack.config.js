const webpack = require('webpack');

module.exports = {
  mode: 'production',
  entry: {
    bundle1: './main1.jsx',
    bundle2: './main2.jsx',
  },
  output: {
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
    ],
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          name: 'commons',
          filename: '[name].js',
          chunks: 'initial',
          minChunks: 2,
        },
      },
    },
  },
  // plugins: [
  // The CommonsChunkPlugin has been removed in webpack v4 legato.
  // To learn how chunks are treated in the latest version, check out the SplitChunksPlugin.
  //   new webpack.optimize.CommonsChunkPlugin({
  //     name: 'commons', // the commons chunk name
  //     filename: 'commons.js', // the filename of the commons chunk
  //   }),
  // ],
};
