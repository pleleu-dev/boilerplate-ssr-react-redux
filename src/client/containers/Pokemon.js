import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPokemon } from "../actions";
import styled from "styled-components";
import _map from "lodash/map";
import _filter from "lodash/filter";

class Pokemon extends Component {
	constructor(props) {
		super(props);
	}
	componentDidMount() {
		if (!this.props.pokemon) this.props.fetchPokemon();
	}
	render() {
		if (!this.props.pokemon) return null;

		return (
			<div>
				<p>{this.props.pokemon.name}</p>
				<img src={this.props.pokemon.sprites.front_default} />
				<img src={this.props.pokemon.sprites.front_female} />
				<img src={this.props.pokemon.sprites.back_default} />
				<img src={this.props.pokemon.sprites.back_female} />
				<img src={this.props.pokemon.sprites.front_shiny} />
				<img src={this.props.pokemon.sprites.front_shiny_female} />
				<img src={this.props.pokemon.sprites.back_shiny} />
				<img src={this.props.pokemon.sprites.back_shiny_female} />
			</div>
		);
	}
}

function mapStateToProps({ pokemon }) {
	return { pokemon };
}

export default connect(
	mapStateToProps,
	{ fetchPokemon }
)(Pokemon);
