const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      "/ticket/api/": {
        target: "http://pyons04.work",
      }
    }
  }
})
