var merge = require("webpack-merge");
const configBase = require("./config/webpack/webpack.base");
const configClientDev = require("./config/webpack/webpack.dev.client");
const configServerDev = require("./config/webpack/webpack.dev.server");
const configClientProd = require("./config/webpack/webpack.prod.client");
const configServerProd = require("./config/webpack/webpack.prod.server");

module.exports = (env, argv) => {
	switch (env) {
		case "devClient":
			return merge(configBase, configClientDev);
			break;
		case "devServer":
			return merge(configBase, configServerDev);
			break;
		case "prodClient":
			return merge(configBase, configClientProd);
			break;
		case "prodServer":
			return merge(configBase, configServerProd);
			break;
		default:
			console.error("webpack:error env not specified");
	}
};
