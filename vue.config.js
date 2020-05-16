const path = require('path');

module.exports = {
  publicPath: '/contentful/docs',
  outputDir: './docs',
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.join(__dirname, 'src/'),
      },
    },
  },
  css: {
    loaderOptions: {
      scss: {
        prependData: '@import "@/assets/scss/_vue.scss";',
      },
    },
  },
};
