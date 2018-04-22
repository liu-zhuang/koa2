const path = require('path');
const cleanWebpackPlugin = require('clean-webpack-plugin');

const config = {
	mode: 'development',

	entry: {
		app: './decorator.js'
	},

	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, 'dist')
	},

	module: {
		rules: [
		{
			test: /\.js$/,
			use: {
				loader: 'babel-loader',
			},
			exclude: '/node_modules/'
		}
		]
	},

	plugins: [
		// 参数是个数组，传入目录名称
		new cleanWebpackPlugin(['dist'])
		]
	}

	module.exports = config;