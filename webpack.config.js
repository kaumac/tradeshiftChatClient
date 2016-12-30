var webpack = require('webpack');

module.exports = {
  context: __dirname + "/app",
  devtool: "cheap-module-source-map",
  entry: {
    javascript: "./app.js",
    html: "./index.html",
  },
  output: {
    filename: 'app.js',
    path: __dirname + '/dist'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ["babel-loader"],
      },
      {
        test: /\.html$/,
        loader: "file?name=[name].[ext]",
      }
    ]
  }
}
