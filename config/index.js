"use strict";

const path = require("path");

const proxyDefaultParams = () => ({
  target: "http://localhost:3000",
  secure: false,
  changeOrigin: true
});

module.exports = {
  dev: {
    devtool: "source-map",
    host: "localhost",
    port: 8080,
    proxyTable: {
      "/sickList": proxyDefaultParams(),
      "/sysConfig": proxyDefaultParams(),
      "/menuKind": proxyDefaultParams(),
      "/orderInfo": proxyDefaultParams()
    }
  },
  build: {
    index: path.resolve(__dirname, "../build/index.html"),
    outPutPath: path.resolve(__dirname, "../build")
  }
};
