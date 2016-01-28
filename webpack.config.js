var path = require('path');
// var fs = require('fs-extra');
var node_modules_dir = path.resolve(__dirname, 'node_modules');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var config = {
    entry: ['webpack/hot/dev-server', path.resolve(__dirname, 'app/main.js')],

    output: {
        path: path.resolve(__dirname, 'build'),
				'publicPath': '/',
        filename: 'bundle.js'
    },

    module: {
        loaders: [{
            test: /\.jsx?$/,
						exclude: [node_modules_dir],
            loader: 'babel'
				}, {
						test: /\.styl$/,
						loader: "style!css!autoprefixer!stylus"
				}, {
						test: /.*\.(gif|png|jpe?g|svg)$/i,
						loaders: [
							'file'
						]
				}, {
						test: /\.(woff|woff2|ttf)$/,
      			loader: 'url?limit=100000'
				}, {
						test: /\.json$/,
						loader: 'json'
				}],
    },
		plugins: [
      new HtmlWebpackPlugin({
        title: 'Trade App'
      })
    ]
};

module.exports = config;
