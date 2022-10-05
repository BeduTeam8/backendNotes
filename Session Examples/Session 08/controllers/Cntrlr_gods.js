const God = require("../models/gods");

// create function
function createGod(req, res) {
	console.log("createGod called");
	const body = req.body;
	God.create(body).then((god) => {
		res.status(201).json(god);
	});
}

// get singular function
async function getGod(req, res) {
	const id = req.params.id;
	const god = await God.findByPk(id);
	res.status(200).json(god);
}
// get multiple function
async function getGods(req, res) {
	const gods = await God.findAll();
	res.status(200).json(gods);
}

// update function
async function updateGod(req, res) {
	const id = req.params.id;
	const god = req.body;
	await God.update(god, { where: { id: id } });
	const newGod = await God.findByPk(id);
	res.status(200).json(newGod);
}

// delete function
async function deleteGod(req, res) {
	const id = req.params.id;
	const deleteGods = God.destroy({ where: { id: id } });
	res.status(200).json(deleteGods);
}

module.exports = {
	createGod,
	getGod,
	getGods,
	updateGod,
	deleteGod,
};
