const path = require("path");
const fs = require("fs");
const nodeExternals = require("webpack-node-externals");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

const resolvePath = {
	root: resolveApp("./"),
	build: resolveApp("./build"),
	index: resolveApp("./src/index.js"),
	public: resolveApp("./public"),
	src: resolveApp("./src"),
	nodeModules: resolveApp("./node_modules")
};

module.exports = {
	name: "server",
	mode: "development",
	target: "node",
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
	},
	plugins: [
		new CleanWebpackPlugin(resolvePath.build, {
			root: resolvePath.root,
			verbose: true,
			dry: false
		})
	]
};
