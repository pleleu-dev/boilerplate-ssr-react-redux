import Homepage from "./pages/Homepage";
import PokemonPage from "./pages/PokemonPage";
import RedirectPage from "./pages/RedirectPage";
import ErrorPage from "./pages/ErrorPage";

import App from "./App";

export default [
	{
		component: App,
		routes: [
			{
				component: Homepage,
				path: "/",
				exact: true
			},
			PokemonPage,
			{
				path: "/redirect",
				component: RedirectPage
			},
			{
				component: ErrorPage
			}
		]
	}
];
