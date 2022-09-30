const { Sequelize, DataTypes, Model } = require("sequelize");
const crypto = require("node:crypto");

const sequelize = require("../config/db");
const { Hash } = require("node:crypto");

const User = sequelize.define("User", {
	username: {
		type: DataTypes.CHAR(64),
		allowNull: false,
		unique: true,
		validate: {
			isLowercase: true,
			is: /^[a-z0-9_-]+$/i,
		},
	},
	name: {
		type: DataTypes.CHAR(64),
		allowNull: false,
	},
	surname: { type: DataTypes.CHAR(128), allowNull: false },
	email: {
		type: DataTypes.CHAR(64),
		allowNull: false,
		unique: true,
		validate: {
			isEmail: true,
		},
	},
	password_hash: { type: DataTypes.CHAR(64), allowNull: false },
	password_Salt: {
		type: DataTypes.CHAR(64),
		allowNull: false,
	},
	tarjeta: {
		type: DataTypes.CHAR(64),
		allowNull: false,
		unique: true,
		validate: {
			isNumeric: true,
			is: /^(?:3[47][0-9]{13})$/,
		},
	},
	tipo_tarjeta: { type: DataTypes.CHAR(64) },
});

User.createPassword = function (plaintext) {
	const salt = crypto.randomBytes(16).toString("hex");
	const hash = crypto
		.pbkdf2Sync(plainText, salt, 10000, 512, " sha512")
		.toString("hex");
	return { salt: salt, hash: hash };
};

User.validatePassword = function (password) {
	const hash = crypto
		.pbkdf2Sync(plainText, salt, 10000, 512, " sha512")
		.toString("hex");
	return this.password_hash === hash;
};
module.exports = User;
