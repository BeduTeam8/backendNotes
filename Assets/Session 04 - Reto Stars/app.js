const express = require("express"); // Import express
const app = express(); // Create express app
const PORT = 3001; // Define port

const Starsystem = {
	Andromeda: {
		abreviatura: "And",
		superficie: 722.3,
		num_estrellas: 152,
		estr_mas_brillante: "Alpheratz",
	},
	Centaurus: {
		abreviatura: "Cen",
		superficie: 1060.4,
		num_estrellas: 281,
		estr_mas_brillante: "Alfa Centauri",
	},
	Ursa_Minor: {
		abreviatura: "UMi",
		superficie: 255.9,
		num_estrellas: 39,
		estr_mas_brillante: "Polaris",
	},
};

// Add request logging middleware
app.get(`/`, (req, res) => {
	res.send("Hello World!");
});

// Add request logging middleware
app.get(`/Starsystem`, (req, res) => {
	res.json(Starsystem);
});

// request info from Starsystem
app.get(`/Starsystem/:name`, (req, res) => {
	const name = req.params.name;
	const star = Starsystem[name];
	if (star) {
		res.json(star);
	} else {
		res.status(404).json({
			error: `Star ${name} not found`,
		});
	}
});

app.listen(PORT, () => {
	// Start server
	console.log(`Server is listening on port ${PORT}`); // Log message
});
