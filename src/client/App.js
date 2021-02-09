import React from "react";
import { renderRoutes } from "react-router-config";
import Header from "./components/Header";
import reset from "styled-reset";
import styled, { createGlobalStyle } from "styled-components";
import RobotoRegular from "../static/fonts/Roboto-Regular.ttf";

const baseStyles = () => createGlobalStyle`
	${reset}
	@font-face {
		font-family: 'Roboto-Regular';
		src: url(${RobotoRegular});
		font-weight: normal;
		font-style: normal;
	}
`;

const Wrapper = styled.div`
	margin: 0 5%;
`;

const App = ({ route }) => {
	baseStyles();
	return (
		<div>
			<Header />
			<Wrapper>{renderRoutes(route.routes)}</Wrapper>
		</div>
	);
};

export default App;
