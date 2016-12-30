var config = require("./webpack.config.js");
var webpack = require("webpack");
var webpackDevServer = require("webpack-dev-server");
config.entry.unshift("webpack-dev-server/client?http://localhost:8080/", "webpack/hot/dev-server");
var compiler = webpack(config);
var server = new webpackDevServer(compiler, {
  hot: true
});
server.listen(8080);
