const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const God = sequelize.define("God", {
	name: {
		type: DataTypes.CHAR(64),
	},
	Symbol: {
		type: DataTypes.CHAR(64),
	},
	lives: {
		type: DataTypes.CHAR(64),
	},
});

module.exports = God;
