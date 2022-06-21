const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;

const deps = require('./package.json').dependencies;

module.exports = (env) => {
	return {
		mode: env.production ? 'production' : 'development',
		entry: path.join(__dirname, 'src', 'index.js'),
		output: {
			publicPath: 'auto',
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
			new ModuleFederationPlugin({
				name: 'template_plugin',
				filename: 'remoteEntry.js',
				exposes: {
					'./App': './src/App',
				},
			}),
			new CleanWebpackPlugin(),
			new HtmlWebpackPlugin({
				template: path.join(__dirname, 'public', 'index.html'),
			}),
			!env.production && new ReactRefreshWebpackPlugin(),
		].filter(Boolean),
		devServer: {
			open: true,
			port: 8001,
			compress: true,
			hot: true,
			headers: {
				'Cache-Control': 'no-store',
			},
		},
	};
};
