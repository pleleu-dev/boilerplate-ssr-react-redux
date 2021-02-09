const path = require("path");
const fs = require("fs");
const nodeExternals = require("webpack-node-externals");
const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

const resolvePath = {
	dist: resolveApp("./dist"),
	index: resolveApp("./src/index.js")
};

module.exports = {
	name: "server",
	mode: "production",
	target: "node",
	node: {
		__dirname: false
	},
	externals: [nodeExternals()],
	entry: resolvePath.index,
	output: {
		path: resolvePath.build,
		filename: "index.js"
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
					name: "/public/img/[name].[ext]",
					fallback: {
						loader: "file-loader",
						options: {
							emitFile: false
						}
					}
				}
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/,
				exclude: /node_modules/,
				use: {
					loader: "file-loader",
					options: {
						name: "/public/fonts/[name].[ext]"
					}
				}
			}
		]
	}
};
