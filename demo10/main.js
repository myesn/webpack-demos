(async () => {
  const { default: content } = await import(/* webpackChunkName: "custom-chunk-name" */'./a');

  document.open();
  document.write('<h1>' + content + '</h1>');
  document.close();
})();