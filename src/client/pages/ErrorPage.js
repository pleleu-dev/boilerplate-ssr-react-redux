import React from "react";

const ErrorPage = ({ staticContext = {} }) => {
	staticContext.notFound = true;
	return <h1> Oups not found !</h1>;
};

export default ErrorPage;
