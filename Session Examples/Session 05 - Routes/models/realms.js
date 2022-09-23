const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const God = require("./gods");

const Realm = sequelize.define("Realm", {
	name: {
		type: DataTypes.CHAR(64),
	},
	description: {
		type: DataTypes.TEXT,
	},
});

// relation 1 to many

Realm.hasMany(God);
God.belongsTo(Realm);

module.exports = Realm;
