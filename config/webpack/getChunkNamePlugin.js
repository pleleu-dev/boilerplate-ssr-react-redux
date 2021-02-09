function GetChunkNamePlugin() {}
const fs = require("fs");

GetChunkNamePlugin.prototype.apply = function(compiler) {
	compiler.plugin("emit", function(compilation, callback) {
		// Explore each chunk (build output):
		const chunkArray = [];
		compilation.chunks.forEach(function(chunk) {
			const chunkObj = {
				name: chunk.id,
				path: chunk.files[0]
			};
			chunkArray.push(chunkObj);
		});

		fs.writeFile(
			"manifest.js",
			`export default {data : ${JSON.stringify(chunkArray)}}`,
			function(err) {
				if (err) throw err;
			}
		);

		callback();
	});
};

module.exports = GetChunkNamePlugin;
