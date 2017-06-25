const webpack = require("webpack");
const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	context: resolve(__dirname, "src"),
	devtool: "inline-source-map",

	entry: [
		"react-hot-loader/patch",
		"webpack/hot/only-dev-server",
		"./index.js"
	],

	devServer: {
		hot: true,
		contentBase: resolve(__dirname, "dist"),
		host: "0.0.0.0",
		publicPath: `/`,
		historyApiFallback: true,
		disableHostCheck: true,
		headers: {
			"Access-Control-Allow-Origin": "*"
		}
	},

	module: {
		rules: [
			{
				test: /\.js?$/,
				use: [
					{
						loader: "babel-loader",
						options: {
							babelrc: false,
							presets: [
								["env", { modules: false }],
								"react",
								"stage-0"
							],
							plugins: [
								"react-hot-loader/patch",
								"transform-decorators-legacy"
							]
						}
					}
				],
				exclude: /node_modules/
			},
			{
				test: /\.css|scss$/,
				use: [
					"style-loader",
					"css-loader",
					{
						loader: "postcss-loader",
						options: {
							sourceMap: true
						}
					},
					"resolve-url-loader",
					"sass-loader?sourceMap"
				]
			},
			{
				test: /\.(jpe?g|png|gif|svg)$/i,
				use: [
					"file-loader?hash=sha512&digest=hex&name=[hash].[ext]",
					{
						loader: "image-webpack-loader",
						options: {
							mozjpeg: {
								progressive: true
							},
							gifsicle: {
								interlaced: false
							},
							optipng: {
								optimizationLevel: 4
							},
							pngquant: {
								quality: "75-90",
								speed: 4
							}
						}
					}
				]
			}
		]
	},

	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoEmitOnErrorsPlugin(),
		new HtmlWebpackPlugin({
			template: "index.html"
		})
	],

	output: {
		filename: "app.js",
		path: resolve(__dirname, "dist"),
		publicPath: `/`
	}
};
