module.exports = {
  entry: {
    app: './src/app.js',
    search: './src/search.js',
  },
  output: {
    path: __dirname + '/dist',
    filename: '[name].js',
  },
};
