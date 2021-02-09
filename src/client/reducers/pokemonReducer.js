import { FETCH_pokemon } from "../actions";

export default (state = null, action) => {
	switch (action.type) {
		case FETCH_pokemon:
			if (action.payload.data) {
				return action.payload.data;
			}
			return state;
		default:
			return state;
	}
};
