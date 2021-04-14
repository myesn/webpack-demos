# [bundle-loader github](https://github.com/webpack-contrib/bundle-loader)

This module is deprecated and will no longer be maintained.

In most cases, you can replace the functionality by using [`dynamic import`](https://webpack.js.org/api/module-methods/#dynamic-expressions-in-import) instead:

**index.js**

```js
import(
  /* webpackChunkName: "my-chunk-name" */
  './file.bundle.js'
  ).then(bundle => {
    // Doing something with `bundle`
    console.log(bundle)
});
```