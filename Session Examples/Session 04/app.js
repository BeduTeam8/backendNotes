const express = require("express"); // Import express
const app = express(); // Create express app
const PORT = 3000; // Define port
app.use(express.json()); // Parse JSON bodies

//Define Gods
const gods = {
	Zeus: { lives: "Olympus", weapon: "lightning", symbol: "thunderbolt" },
	Poseidon: { lives: "Sea", weapon: "trident", symbol: "horse" },
	Hades: { lives: "Hell", weapon: "spear", symbol: "helmet" },
	Hercules: { lives: "Earth", weapon: "club", symbol: "lion" },
	Ares: { lives: "Mars", weapon: "spear", symbol: "dog" },
	Athena: { lives: "Athens", weapon: "shield", symbol: "owl" },
	Apollo: { lives: "Sun", weapon: "bow", symbol: "lyre" },
	Artemis: { lives: "Moon", weapon: "bow", symbol: "deer" },
	Aphrodite: { lives: "Love", weapon: "dagger", symbol: "dove" },
	Hephaestus: { lives: "Fire", weapon: "hammer", symbol: "anvil" },
	Hermes: { lives: "Mercury", weapon: "spear", symbol: "winged sandals" },
	Dionysus: { lives: "Wine", weapon: "dagger", symbol: "grapes" },
	Demeter: { lives: "Ceres", weapon: "sickle", symbol: "cornucopia" },
	Hestia: { lives: "Vesta", weapon: "spear", symbol: "altar" },
	Persephone: { lives: "Proserpina", weapon: "spear", symbol: "pomegranate" },
	Hecate: { lives: "Night", weapon: "spear", symbol: "torch" },
	Perseus: { lives: "Earth", weapon: "spear", symbol: "winged sandals" },
	Orpheus: { lives: "Music", weapon: "spear", symbol: "lyre" },
	Theseus: { lives: "Athens", weapon: "spear", symbol: "sack" },
};

// Add request logging middleware
app.get(`/`, (req, res) => {
	res.send("Hello World!");
});

// Add request logging middleware
app.get(`/gods`, (req, res) => {
	const lives = req.query.lives;
	if (lives) {
		let filterdGods = Object.entries(gods).filter(
			([name, god]) => god.lives === lives
		); // Filter gods by lives
		if (filterdGods.length === 0) {
			res.send(`No gods live in ${lives}`);
			return; // Return to prevent further execution
		}

		filterdGods = Object.fromEntries(filterdGods); // Convert back to object
		res.send(filterdGods); // Send filtered gods
	} else {
		res.json(gods); // Send all gods
	}
});

// request info from gods
app.get(`/gods/:name`, (req, res) => {
	const name = req.params.name;

	const god = gods[name];
	if (god) {
		res.json(god);
	} else {
		res.status(404).json({
			error: `God ${name} not found`,
		});
	}
});

// add new god
app.post(`/gods/:name`, (req, res) => {
	const name = req.params.name;
	const data = req.body;
	if (gods[name]) {
		res.status(409).json({
			error: `God ${name} already exists`,
		});
	} else {
		gods[name] = data;
		res.json(gods);
	}
	console.log(data);
});

// update god
app.put(`/gods/:name`, (req, res) => {
	const name = req.params.name;
	const data = req.body;
	if (!gods[name]) {
		res.status(404).json({
			error: `God ${name} not found`,
		});
	} else {
		gods[name] = data;
		res.json(gods);
	}
});

// update god via patch
app.patch(`/gods/:name`, (req, res) => {
	const name = req.params.name;
	const data = req.body;
	if (!gods[name]) {
		res.status(404).json({
			error: `God ${name} not found`,
		});
	} else {
		gods[name] = { ...gods[name], ...data };
		res.json(gods);
	}
});

// delete god
app.delete(`/gods/:name`, (req, res) => {
	const name = req.params.name;
	if (!gods[name]) {
		res.status(404).json({
			error: `God ${name} not found`,
		});
	} else {
		delete gods[name];
		res.json(gods);
	}
});

app.listen(PORT, () => {
	// Start server
	console.log(`Server is listening on port ${PORT}`); // Log message
});
