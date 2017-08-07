// Note: You must restart bin/webpack-dev-server for changes to take effect

const merge = require("webpack-merge")
const sharedConfig = require("./shared.js")
const { settings, output } = require("./configuration.js")

module.exports = merge(sharedConfig, {
  entry: {
    application: [
      "react-hot-loader/patch",
      "./app/javascript/packs/application.dev.js",
    ],
  },
  devtool: "cheap-eval-source-map",

  stats: {
    errorDetails: true,
  },

  output: {
    filename: "application.js",
    pathinfo: true,
  },

  devServer: {
    clientLogLevel: "none",
    https: settings.dev_server.https,
    host: settings.dev_server.host,
    port: settings.dev_server.port,
    contentBase: output.path,
    publicPath: output.publicPath,
    compress: true,
    headers: { "Access-Control-Allow-Origin": "*" },
    historyApiFallback: true,
    hot: true,
    inline: true,
    watchOptions: {
      ignored: /node_modules/,
    },
  },
})
