const path = require('path');

module.exports = {
  output: {
    publicPath: "http://localhost:3004/"
  },
  mode: 'development',
  devServer: {
    static: {
      directory: path.join(__dirname, '..','./src/public'),
    },
    hot: true,
    port: 3004
  },
  devtool: 'cheap-module-source-map'
}
