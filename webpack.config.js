const path = require( 'path' );
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = ( env, options ) => {
	return {
		entry: [
			'@babel/polyfill',
			'./src/index.js',
			'webpack-dev-server/client?http://localhost:4000'
		],
		output: {
			path: path.resolve( __dirname, 'dist' ),
			filename: 'bundle.js',
		},

		devtool: 'inline-source-map',
		devServer: {
			hotOnly: true,
			port: 4000,
			host: '0.0.0.0'
		},
		module: {
			rules: [
				{
					test: /\.jsx$|\.js$/,
					use: {
						loader: 'babel-loader'
					},
					exclude: /node_modules\/(?!(dom7|swiper)\/).*/,
				},
				{
					test: /\.css$/,
					use: [
						'style-loader',
						{
							loader: 'css-loader',
							options: {
								importLoaders: 2,
								sourceMap: true,
								url: false
							}
						},
					],
				},
				{
					test: /\.(png|jpg|gif)$/,
					use: [
						{
							loader: 'file-loader',
							options: {
								name: '[name].[ext]',
								outputPath: 'images/'
							}
						}
					]
				},
			],
		},
		resolve: {
			modules: [
				path.resolve(__dirname),
				'node_modules'
			],
			extensions: ['.js', '.jsx']
		},
		plugins: [new HtmlWebpackPlugin({
			template: 'index.html'
		})]
	}
};