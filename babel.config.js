module.exports = {
	presets: [
		['@babel/preset-env', {
			targets: {
				browsers: ["last 2 versions", "ie >= 10"]
			}
		}],
		'@babel/preset-react'
	],
	plugins: [
		'react-hot-loader/babel',
		'@babel/plugin-proposal-class-properties'
	]
};