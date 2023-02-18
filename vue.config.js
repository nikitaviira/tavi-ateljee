const VUETIFY_LOADER_PLUGIN = require('vuetify-loader/lib/plugin');

module.exports = {
  devServer: {
    port: 8000,
    https: false
  },
  runtimeCompiler: true,
  configureWebpack: {
    plugins: [
      new VUETIFY_LOADER_PLUGIN()
    ]
  },
  css: {
    loaderOptions: {
      scss: {
        additionalData: '@import "~@/sass/variables.scss";'
      }
    }
  }
};
