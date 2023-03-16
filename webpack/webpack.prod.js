const CopyPlugin = require("copy-webpack-plugin");
const path = require('path');

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  plugins: [
    new CopyPlugin({
      patterns: [
        { 
          from: path.join(__dirname, '..','./src/public'), 
        },
      ],
    }),
  ],
}