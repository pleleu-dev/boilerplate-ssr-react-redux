import React, { Component } from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { renderRoutes } from "react-router-config";
import serialize from "serialize-javascript";
import { ServerStyleSheet, StyleSheetManager } from "styled-components";
import { Helmet } from "react-helmet";
import Routes from "../client/Routes";
import manifest from "../../manifest";
import { SrrProvider } from "../client/context/SSRContext";

export default async (req, store, context) => {
	const sheet = new ServerStyleSheet();
	const staticLink = req.protocol + "://" + req.get("host");
	let modules = [];

	class CaptureSrr extends React.Component {
		handleContextChange = loadable => {
			modules.push(loadable);
			return loadable;
		};
		render() {
			const contextValue = {
				handleChange: this.handleContextChange
			};
			return (
				<Provider store={store}>
					<SrrProvider value={contextValue}>
						<StaticRouter context={context} location={req.path}>
							<StyleSheetManager sheet={sheet.instance}>
								<div>{renderRoutes(Routes)}</div>
							</StyleSheetManager>
						</StaticRouter>
					</SrrProvider>
				</Provider>
			);
		}
	}
	let content = renderToString(<CaptureSrr />);
	await Promise.all(modules.map(i => i.module()))
		.then(mod => {
			mod.forEach((item, index) => {
				if (item.default) {
					const SrrComponent = item.default;
					let cleanProps = { ...modules[index] };
					delete cleanProps.webpackChunkName;
					delete cleanProps.module;
					delete cleanProps.callback;
					delete cleanProps.srr;
					const moduleToString = renderToString(
						<Provider store={store}>
							<SrrComponent {...cleanProps} />
						</Provider>
					);
					const regex = new RegExp(
						`<template>${modules[index].webpackChunkName}</template>`
					);
					content = content.replace(regex, moduleToString);
				}
			});
		})
		.catch(err => {
			console.log("Err");
		});
	const styleTags = sheet.getStyleTags();
	const helmet = Helmet.renderStatic();

	let chunkScriptTag = "";
	manifest.data.forEach(element => {
		if (!element.path.includes("chunk")) {
			chunkScriptTag += `<script src="${staticLink}/public/${
				element.path
			}"></script>`;
		}
	});

	return `<html>
					<head>
						${helmet.title.toString()}
						${helmet.meta.toString()}
						${styleTags}
					</head>
					<body>
						<div id="root">${content}</div>
						<script>
							window.INITIAL_STATE = ${serialize(store.getState())}
						</script>

						${chunkScriptTag}
						
					</body>
				</html>
				`;
};
