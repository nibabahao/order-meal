const path = require("path");
const webpack = require("webpack");
const config = require("./config");

function resolve(dir) {
  return path.join(__dirname, "..", dir);
}

module.exports = {
  pwa: {
    iconPaths: {
      favicon32: "favicon.ico",
      favicon16: "favicon.ico",
      appleTouchIcon: "favicon.ico",
      maskIcon: "favicon.ico",
      msTileImage: "favicon.ico"
    }
  },
  outputDir: "./build",
  configureWebpack: {
    devServer: {
      open: true, // 自动打开浏览器
      hot: true, // 开启热更新
      overlay: true, // 浏览器上显示错误
      compress: true,
      proxy: config.dev.proxyTable
    },
    externals: {
      weui: "weui",
      BScroll: "BScroll"
    }
  }
};
