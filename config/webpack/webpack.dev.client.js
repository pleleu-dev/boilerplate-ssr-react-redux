const path = require("path");
const fs = require("fs");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const GetChunkNamePlugin = require("./getChunkNamePlugin");

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

const resolvePath = {
	root: resolveApp("./"),
	index: resolveApp("./src/client/index.js"),
	public: resolveApp("./public"),
	src: resolveApp("./src"),
	build: resolveApp("./build"),
	nodeModules: resolveApp("./node_modules")
};

module.exports = {
	mode: "development",
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
				include: resolvePath.src,
				exclude: [resolvePath.nodeModules, resolvePath.build],
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
					test: /node_modules/,
					// priority
					priority: 20
				},
				// common chunk
				common: {
					name: "common",
					minChunks: 2,
					chunks: "async",
					priority: 10,
					reuseExistingChunk: true,
					enforce: true
				}
			}
		}
	},
	devtool: "source-map"
};
