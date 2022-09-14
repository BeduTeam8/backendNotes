import { Sequelize, DataTypes, Op } from "Sequelize";

const sequelize = new Sequelize("sqlite:db.sqlite3");

const Users = sequelize.define("Users", {
	firstname: DataTypes.STRING,
	lastname: DataTypes.STRING,
	email: DataTypes.STRING,
	address: DataTypes.STRING,
	phoneNumber: DataTypes.INTEGER,
});

const Productos = sequelize.define("Productos", {
	ProductId: DataTypes.INTEGER,
	Name: DataTypes.STRING,
	price: DataTypes.INTEGER,
	category: DataTypes.STRING,
	description: DataTypes.STRING,
});

const Venta = sequelize.define("Venta", {
	SaleId: DataTypes.INTEGER,
	email: DataTypes.STRING,
	UserId: DataTypes.INTEGER,
	ProductId: DataTypes.INTEGER,
	quantity: DataTypes.INTEGER,
	total: DataTypes.INTEGER,
});

Users.HasMany.Venta;
Venta.BelongsTo.Users;

await Users.sync();

await Productos.sync();

await Venta.sync();

// Users.create({
// 	firstname: "John",
// 	lastname: "Doe",
// 	email: "toonchavez8@gmail.com",
// 	address: "1234 Main St",
// 	phoneNumber: 1234567890,
// });

// Productos.create({
// 	id: 101,
// 	nombre: "Planta",
// 	precio: 230.0,
// 	cat: "Seres vivos",
// 	desc: "Planta de interior, con maceta",
// });
