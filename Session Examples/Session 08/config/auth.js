const secret = require("./secret");

const { expressjwt } = require("express-jwt");

//bearer <JWT>
function getTokenFromHeader(req) {
	if (
		req.headers.authorization &&
		req.headers.authorization.split(" ")[0] === "Bearer"
	) {
		return req.headers.authorization.split(" ")[1];
	}
}

const auth = {
	required: function (req, res, next) {
		if (!req.auth || !req.auth.user) {
			return res.status(401).send({
				error: "need authorization from JWT provider",
			});
		}
		next();
	},
	isAdmin: function (req, res, next) {
		if (!req.auth) {
			return res.status(401).send({
				error: "you need to login ",
			});
		}
		if (req.auth.user !== "admin") {
			return res.status(403).send({
				error: "you need admin access ",
			});
		}
		next();
	},
	optional: expressjwt({
		secret: secret,
		algorithms: ["HS256"],
		userProperty: "user",
		getToken: getTokenFromHeader,
		credentialsRequired: false,
	}),
};

module.exports = auth;
