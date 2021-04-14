const HtmlWebpackPlugin = require('html-webpack-plugin'); // 通过 npm 安装
const webpack = require('webpack'); // 访问内置的插件
const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'index.bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
      },
    ],
  },
  plugins: [
    // 用于自定义编译过程中的进度报告
    new webpack.ProgressPlugin(),
    // 生成一个 html 文件，并在其中使用 script 引入一个名为 index.bundle.js 的 js 文件
    new HtmlWebpackPlugin({ template: './src/index.html' }),
  ],
};
