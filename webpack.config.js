var webpack = require('webpack');

module.exports = {
  context: __dirname + "/app",
  entry: {
    app: ["./app.js"],
    html: ["./index.html"],
  },
  output: {
    filename: 'app.js',
    path: __dirname + '/dist'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
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
