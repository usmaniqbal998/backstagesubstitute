const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = (env) => {
	return {
		mode: env.production ? 'production' : 'development',
		entry: path.join(__dirname, 'src', 'index.js'),
		output: {
			path: path.resolve(__dirname, '../../dist'),
			filename: '[name].[contenthash].js',
		},
		devtool: 'inline-source-map',
		cache: false,
		resolve: {
			extensions: ['.js', '.jsx'],
			modules: ['node_modules'],
			alias: {
				react: path.resolve('./node_modules/react'),
				'react-dom': path.resolve('./node_modules/react-dom'),
			},
		},
		module: {
			rules: [
				{
					test: /\.(js|jsx)$/,
					exclude: /node_modules/,
					use: {
						loader: 'babel-loader',
						options: {
							cacheCompression: false,
							cacheDirectory: true,
							plugins: [
								!env.production &&
									require.resolve('react-refresh/babel'),
							].filter(Boolean),
						},
					},
				},
				{
					test: /\.(png|jpg|jpeg)$/i,
					type: 'asset/resource',
				},
				{
					test: /\.svg$/i,
					type: 'asset/inline',
				},
			],
		},
		plugins: [
			new CleanWebpackPlugin(),
			new HtmlWebpackPlugin({
				template: path.join(__dirname, 'public', 'index.html'),
			}),
			!env.production && new ReactRefreshWebpackPlugin(),
		].filter(Boolean),
		devServer: {
			open: true,
			port: 3000,
			compress: true,
			hot: true,
			headers: {
				'Cache-Control': 'no-store',
			},
		},
	};
};
