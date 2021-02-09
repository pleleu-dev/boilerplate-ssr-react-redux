export default function(req, res, next) {
	if (req.session.user || req.path === "/login") {
		if (req.session.user && req.path === "/login") {
			res.redirect("/");
		} else {
			next();
		}
	} else {
		const hasAuth = parseInt(process.env.AUTH, 10);
		if (hasAuth) {
			res.redirect("/login");
		} else {
			next();
		}
	}
}
