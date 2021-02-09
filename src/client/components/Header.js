import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import smallImage from "../../static/img/smallImage.png";

const Wrapper = styled.div`
	padding: 1em;
	text-align: center;
`;

const Title = styled.h1`
	color: grey;
	font-size: 2em;
	font-family: "Roboto-Regular";
	font-weight: bold;
	text-transform: uppercase;
`;
const TitleImage = styled.img`
	height: 4em;
	width: auto;
	vertical-align: middle;
`;

const StyledLink = styled(Link)`
	display: inline-block;
	color: palevioletred;
	font-weight: bold;
	font-size: 1em;
	margin: 1em;
	padding: 0.25em 1em;
	border: 2px solid palevioletred;
	border-radius: 3px;
	text-decoration: none;
	font-family: "Roboto-Regular";
`;
const Header = () => {
	return (
		<Wrapper>
			<TitleImage src={smallImage} alt="Title image" />
			<Title>POKEMON</Title>
			<StyledLink to="/pokemon/pikachu">Pikachu</StyledLink>
		</Wrapper>
	);
};

export default Header;
