var HtmlwebpackPlugin = require('html-webpack-plugin')
var HtmlwebpackCdnPlugin = require('html-webpack-cdn-plugin')

module.exports = {
  entry: {
  	index:'./entry.js'
  },
  output: {
    filename: '[name].js'
  },
  plugins: [
  	new HtmlwebpackCdnPlugin({}),
    new HtmlwebpackPlugin()
  ]
}