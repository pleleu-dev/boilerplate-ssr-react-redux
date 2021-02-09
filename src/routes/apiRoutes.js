import axios from "axios";

const catchError = data => {
	console.log("catchError");
	if (data && data.response) {
		console.log("data.response", data.response);
	}
};

export default function(app) {
	const SERVICE_URL = process.env.SERVICE_URL;
	app.get("/api/pokemon/:pokemonId/", async (req, res) => {
		const response = await axios
			.get(`${SERVICE_URL}pokemon/${req.params.pokemonId}/`)
			.catch(err => {
				catchError(data, res);
			});
		if (response) {
			res.status(200);
			res.contentType("json");
			res.send(JSON.stringify(response.data));
		}
	});
}
