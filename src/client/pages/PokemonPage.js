import React, { Component } from "react";
import { Helmet } from "react-helmet";
import SSRLoader from "../hoc/SSRLoader";
import styled from "styled-components";
import { Wrapper } from "../styles";
import { fetchPokemon } from "../actions";

const SubTitle = styled.h2`
	color: burlywood;
	font-size: 1.2em;
	padding: 1em;
	font-family: "Roboto-Regular";
	font-weight: bold;
	text-transform: uppercase;
`;

const PokemonModule = () =>
	import(/* webpackChunkName: 'chunk/Pokemon' */ "../containers/pokemon");

class PokemonPage extends Component {
	head() {
		return (
			<Helmet>
				<title />
				<meta property="og:title" content="pokemon" />
			</Helmet>
		);
	}

	render() {
		return (
			<div>
				{this.head()}
				<SubTitle>POKEMON</SubTitle>
				<Wrapper>
					<SSRLoader
						ssr={true}
						module={PokemonModule}
						webpackChunkName="chunkPokemon"
						uniqueId="chunkPokemon"
						lazyload={false}
						id={this.props.match.params.id}
					/>
				</Wrapper>
			</div>
		);
	}
}

function loadPokemon(store) {
	return store.dispatch(fetchPokemon());
}

export default {
	component: PokemonPage,
	path: "/pokemon/:id",
	exact: true,
	loadData: loadPokemon
};
