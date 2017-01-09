import path from 'path';
const webpack = require('webpack');

module.exports = {
  context: __dirname + "/app",
  devtool: "cheap-module-eval-source-map",
  entry: {
    javascript: "./app.jsx",
    html: "./index.html",
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    root: [
      path.resolve('./app')
    ],
  },
  output: {
    filename: 'app.js',
    path: __dirname + '/dist'
  },
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loaders: ["babel-loader"/*, "eslint-loader"*/],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ["babel-loader"/*, "eslint-loader"*/],
      },
      {
        test: /\.html$/,
        loader: "file?name=[name].[ext]",
      },
      {
        test: /\.scss$/,
        loaders: ["style", "css?sourceMap", "sass?sourceMap"]
      }
    ]
  },
  eslint: {
    configFile: './.eslintrc'
  },
  sassLoader: {
    includePaths: [path.resolve(__dirname, "./app/scss")]
  }
}
