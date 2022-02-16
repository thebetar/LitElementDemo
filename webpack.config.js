const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	devServer: {
		historyApiFallback: true,
		port: 8080
	},
	mode: 'development',
	entry: './public/index.ts',
	output: {
		filename: 'main.js',
		path: path.resolve(__dirname, 'dist')
	},
	resolve: {
		extensions: ['.ts', '.js']
	},
	module: {
		rules: [
			{
				test: /\.ts$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						plugins: [
							[
								'@babel/plugin-proposal-decorators',
								{ decoratorsBeforeExport: true }
							],
							[
								'@babel/plugin-proposal-class-properties',
								{ loose: true }
							]
						]
					}
				}
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			chunksSortMode: 'none',
			template: 'public/index.html'
		})
	]
};
