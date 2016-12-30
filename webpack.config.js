var webpack = require('webpack');

module.exports = {
  context: __dirname + "/app",
  entry: ["./app.js"],
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
      }
    ]
  }
}
