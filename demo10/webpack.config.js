module.exports = {
  mode: 'development',
  entry: './main.js',
  output: {
    filename: 'bundle.js',
  },
  experiments: {
    topLevelAwait: true,
  },
};
