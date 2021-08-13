const { merge } = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const common = require('./webpack.common.js');

const prodConfig = {
  mode: 'production',
  devtool: 'source-map',
  plugins: [new MiniCssExtractPlugin()],
  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
    ],
  },
};

module.exports = merge(common, prodConfig);
