const { merge } = require('webpack-merge');

const common = require('./webpack.common.js');

const devConfig = {
  mode: 'development',
  devtool: 'eval-source-map',
  target: 'web',
  devServer: {
    port: 3000,
    contentBase: '../build',
  },
};
module.exports = merge(common, devConfig);
