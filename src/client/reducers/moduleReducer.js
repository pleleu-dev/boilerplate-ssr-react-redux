import { ADD_Module } from "../actions";
import _mapKeys from "lodash/mapKeys";

export default (state = [], action) => {
	switch (action.type) {
		case ADD_Module:
			console.log("ADD_Module", action.payload);
			if (action.payload) state.push(action.payload);
			return state;

		default:
			return state;
	}
};
