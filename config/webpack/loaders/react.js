module.exports = {
  test: /\.(js|jsx)?(\.erb)?$/,
  exclude: /node_modules/,
  loader: ["react-hot-loader/webpack", "babel-loader"],
}
