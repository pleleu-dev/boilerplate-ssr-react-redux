import axios from "axios";

/* types */
export const FETCH_pokemon = "fetch_pokemon";
export const ADD_Module = "add_module";

const handleAjaxRequestError = error => {
	if (error.response) {
		console.error("error.response data :", error.response.data);
		console.error("error.response status :", error.response.status);
		console.log("error.response headers :", error.response.headers);
	} else if (error.request) {
		//console.error("error.request :", error.request);
	} else {
		console.error("Error", error.message);
	}
	return;
};

/* Actions creators */
export const fetchPokemon = () => async dispatch => {
	const rootPath = process.env.ROOTPATH || "";
	const res = await axios
		.get(`${rootPath}/api/pokemon/pikachu/`)
		.catch(handleAjaxRequestError);
	if (res) {
		dispatch({
			type: FETCH_pokemon,
			payload: res
		});
	}
};

export const addToModuleList = mdl => dispatch => {
	dispatch({
		type: ADD_Module,
		payload: mdl
	});
};
