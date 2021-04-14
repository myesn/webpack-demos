module.exports = {
  // entry: './src/index.js',
  entry: {
    main: './src/main.js',
    app: './src/app.js',
    adminApp: './src/adminApp.js',
    b2: {
      // 不能循环引用，a dependOn b, b dependOn a，否则会抛出错误
      dependOn: 'adminApp',
      filename: './output.js',
      import: './src/app.js',
      libary: {},
      // runtime 和 dependOn 不应在同一个入口上同时使用，会抛出错误
      // 确保 runtime 不能指向已存在的入口名称，否则会抛出错误，比如 main、app、adminApp、b2
      runtime: 'chunk_name', 
    },
  },
  // entry: ['./src/index.js', './src/index2.js'],
  output: {
    filename: 'bundle.js',
  },
};
