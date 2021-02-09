require("dotenv").load();

import "@babel/polyfill";
import path from "path";
import fs from "fs";
import express from "express";
import renderer from "./helpers/renderer";
import { matchRoutes } from "react-router-config";
import Routes from "./client/Routes";
import createStore from "./helpers/createStore";
import cors from "cors";
import bodyParser from "body-parser";
import session from "express-session";
import cookieParser from "cookie-parser";
import http from "http";
import apiRoutes from "./routes/apiRoutes";
import authMiddleware from "./middlewares/authMiddleware";

const ENV_PRODUCTION = process.env.NODE_ENV === "production" ? true : false;
const app = express();
const server = http.createServer(app);
const PORT = process.env.PORT || 3000;

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

let sess = {
	secret: "I can see dead people" /* a string to sign the session ID cookie */,
	cookie: {
		secure: ENV_PRODUCTION ? true : false,
		maxAge: 7200000
	},
	resave: false,
	saveUninitialized: false
};

/* MIDDLEWARES */

app.use(cors());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

if (ENV_PRODUCTION) {
	app.set("trust proxy", 1);
}

app.use(session(sess));

/* SERVING STATIC FILES */

if (ENV_PRODUCTION) {
	/* for production */

	app.use("/public", express.static(path.join(__dirname, "./public")));
	app.use("/chunk", express.static(path.join(__dirname, "./public/chunk")));
} else {
	/* for dev */

	const resolvePath = {
		public: resolveApp("./public/"),
		chunk: resolveApp("./public/chunk")
	};

	app.use("/public", express.static(resolvePath.public));
	app.use("/chunk", express.static(resolvePath.chunk));
}

/* SERVING ROUTES */
/** API routes */
apiRoutes(app, server);

app.get("*", authMiddleware, (req, res) => {
	const store = createStore();
	const promises = matchRoutes(Routes, req.path)
		.map(({ route }) => {
			return route.loadData ? route.loadData(store) : null;
		})
		.map(promise => {
			if (promise) {
				return new Promise((resolve, reject) => {
					promise.then(resolve).catch(resolve);
				});
			}
		});

	Promise.all(promises).then(async () => {
		const context = {};
		const content = await renderer(req, store, context);

		if (context.url) {
			return res.redirect(301, context.url);
		}

		if (context.notFound === true) {
			res.status(404);
		}

		res.send(content);
	});
});

server.listen(PORT, () => {
	console.log(`listening on port ${PORT}`);
});
