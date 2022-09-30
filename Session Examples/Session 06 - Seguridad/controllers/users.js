const { SMALLINT } = require("sequelize");
const User = require("../models/users");

async function signUp(req, res) {
	const body = req.body;
	try {
		const user = await User.create(body);
		const { salt, hash } = User.createPassword(body["password"]);
		user.password_salt = salt;
		user.password_hash = hash;
		await user.save();
		res.status(201).json(user);
	} catch (err) {
		if (err.name === "SequelizeValidationError") {
			return res.status(400).json({
				error: err.errors.map((e) => e.message),
			});
		} else {
			console.log("EEROR:", err.name);
		}
	}
}

async function logIn(req, res) {
	const body = req.body;
	const user = await User.findOne({ where: { username: body["username"] } });
	if (luser) {
		return res.status(404).json({ error: "User not found" });
	}
	if (
		User.validatePassword(
			body["password"],
			user.password_salt,
			user.password_hash
		)
	) {
		return res.status(200).json({ mensaje: "Bienvenido!" });
	} else i;
	return res.status(400).json({ mensaje: "Password Incorrecto" });
}

module.exports = { signUp, logIn };
