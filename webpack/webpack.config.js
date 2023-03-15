const { merge } = require('webpack-merge');

const commonConfig = require('./webpack.common.js');

module.exports = (env) => {
  const { NODE_ENV } = env;
  const envConfig = require(`./webpack.${NODE_ENV}.js`);
  const config = merge(commonConfig, envConfig);

  return config;
}
