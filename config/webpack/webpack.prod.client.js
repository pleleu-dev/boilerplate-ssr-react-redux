const path = require("path");
const fs = require("fs");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const GetChunkNamePlugin = require("./getChunkNamePlugin");

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

const resolvePath = {
	root: resolveApp("./"),
	public: resolveApp("./dist/public/"),
	index: resolveApp("./src/client/index.js")
};

module.exports = {
	mode: "production",
	entry: resolvePath.index,
	output: {
		path: resolvePath.public,
		filename: "[name].[contenthash].js",
		chunkFilename: "[name].[contenthash].bundle.js",
		publicPath: "/"
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						// It enables caching directory for faster rebuilds.
						cacheDirectory: true
					}
				}
			},
			{
				test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
				loader: "url-loader",
				exclude: /node_modules/,
				options: {
					limit: 10000,
					name: "img/[name].[ext]",
					publicPath: "/public"
				}
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/,
				exclude: /node_modules/,
				use: {
					loader: "file-loader",
					options: {
						name: "fonts/[name].[ext]",
						publicPath: "/public"
					}
				}
			}
		]
	},
	plugins: [
		new CleanWebpackPlugin(resolvePath.public, {
			root: resolvePath.root,
			verbose: true,
			dry: false
		}),
		new GetChunkNamePlugin()
	],
	optimization: {
		splitChunks: {
			chunks: "async",
			minSize: 30000,
			maxSize: 0,
			minChunks: 1,
			maxAsyncRequests: 5,
			maxInitialRequests: 3,
			automaticNameDelimiter: "~",
			name: true,
			cacheGroups: {
				vendor: {
					// name of the chunk
					name: "vendor",
					// async + async chunks
					chunks: "all",
					// import file path containing node_modules
					test: /[\\/]node_modules[\\/](react|react-dom|redux|redux-form|lodash|lodash-es|stylis|styled-components|helmet|react-helmet|core-js|react-markdown|@babel\/polyfill)[\\/]/,
					// priority
					priority: -10
				},
				// common chunk
				common: {
					name: "common",
					minChunks: 2,
					chunks: "async",
					priority: -20,
					reuseExistingChunk: true,
					enforce: true
				}
			}
		}
	},
	devtool: ""
};
