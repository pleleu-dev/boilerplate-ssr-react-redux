import React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";

const SubTitle = styled.h2`
	color: pink;
	font-size: 1.5em;
	padding: 0.5em;
	font-family: "Roboto-Regular";
`;

const HomePage = () => {
	return (
		<div>
			<Helmet>
				<title>Home Page</title>
				<meta property="og:title" content="Home" />
			</Helmet>
			<SubTitle>REACT SSR EXAMPLE</SubTitle>
		</div>
	);
};

export default HomePage;
