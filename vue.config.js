const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      "/ticket/api/": {
        target: "http://127.0.0.1:8000",
      }
    }
  }
})
