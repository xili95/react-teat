var path = require('path');
var webpack = require('webpack');
var HtmlwebpackPlugin = require('html-webpack-plugin');
var ROOT_PATH = path.resolve(__dirname);
var BUILD_PATH = path.resolve(ROOT_PATH);
var APP_PATH = path.resolve(ROOT_PATH);

var build = path.resolve(ROOT_PATH, 'build');
var entry = path.resolve(ROOT_PATH, 'dev');

module.exports= {
  entry: {
    app: path.resolve(entry, 'index.js')
  },
  output: {
    path: build,
    filename: 'bundle.js'
  },
  devtool: 'eval-source-map',
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true
  },
  resolve: {
    extensions: ['','.js'],
    root: APP_PATH
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        loaders: ['babel'],
        include: APP_PATH
      },
      {
        test: /\.css$/,
        loaders: ['style', 'css']
      }
    ]
  },
  plugins: [
    new HtmlwebpackPlugin({
      title: 'gfyui'
    })
  ]
};
