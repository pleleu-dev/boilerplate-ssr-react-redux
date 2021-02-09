import { combineReducers } from "redux";
import pokemonReducer from "./pokemonReducer";
import moduleReducer from "./moduleReducer";

export default combineReducers({
	pokemon: pokemonReducer,
	moduleList: moduleReducer
});
