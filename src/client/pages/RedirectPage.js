import React from "react";
import { Redirect } from "react-router-dom";

const RedirectPage = ({ staticContext = {} }) => {
	return <Redirect to="/" />;
};

export default RedirectPage;
