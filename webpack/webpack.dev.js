module.exports = {
  output: {
    publicPath: "http://localhost:3004/"
  },
  mode: 'development',
  devServer: {
    hot: true,
    port: 3004
  },
  devtool: 'cheap-module-source-map'
}
