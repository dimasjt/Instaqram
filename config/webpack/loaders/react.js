let loader
if (process.env.NODE_ENV === "production") {
  loader = ["babel-loader"]
} else {
  loader = ["react-hot-loader/webpack", "babel-loader"]
}

module.exports = {
  test: /\.(js|jsx)?(\.erb)?$/,
  exclude: /node_modules/,
  loader,
}
