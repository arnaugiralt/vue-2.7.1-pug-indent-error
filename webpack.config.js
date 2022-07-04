const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');


module.exports = {
  entry: ['./src/app.js'],
  mode: 'development',
  devtool: 'eval-cheap-module-source-map',

  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.js$/,
        loader: 'esbuild-loader',
        options: {
          target: 'es2015',
        },
      },
      {
        test: /\.pug$/,
        loader: 'pug-plain-loader',
      },
    ],
  },

  plugins: [
    new VueLoaderPlugin({
      compilerOptions: {
        preserveWhitespace: false,
        whitespace: 'condense',
      },
    }),

    new HtmlWebpackPlugin({
      template: 'index.html',
    }),

    new webpack.ProgressPlugin(),
  ],

  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },

  devServer: {
    allowedHosts: 'all',

    historyApiFallback: {
      index: '/',
    },

    hot: true,
    liveReload: false,
  },
};
