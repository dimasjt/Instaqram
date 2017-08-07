// Note: You must restart bin/webpack-dev-server for changes to take effect

const merge = require("webpack-merge")
const sharedConfig = require("./shared.js")

module.exports = merge(sharedConfig, {
  entry: {
    application: [
      "react-hot-loader/patch",
      "./app/javascript/packs/application.dev.js",
    ],
  },
})
