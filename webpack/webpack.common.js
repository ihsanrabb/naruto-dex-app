const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const deps = require("../package.json").dependencies;

module.exports = {
  entry: path.resolve(__dirname, '..', './src/index.tsx'),
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader'
          }
        ]
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: 'asset/inline',
      },
    ]
  },
  output: {
    path: path.resolve(__dirname, '..', './build'),
    filename: 'bundle.js'
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "narutoApp",
      filename: "remoteEntry.js",
      remotes: {
        discoveryApp: `discoveryApp@http://localhost:3003/_next/static/chunks/remoteEntry.js`,
      },
      exposes: {
        './counter': './src/components/Counter.tsx'
      },
      shared: {
        ...deps,
        react: {
          requiredVersion: deps.react,
        },
        "react-dom": {
          requiredVersion: deps["react-dom"],
        },
      }
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '..', './src/index.html')
    })
  ]
}
