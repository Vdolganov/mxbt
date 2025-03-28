const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  css: { loaderOptions: { sass: { additionalData: '@import "@/styles/colors.scss"; @import "@/styles/spacings.scss";' } } },
});
