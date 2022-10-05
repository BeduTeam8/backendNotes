require("dotenv").config();
const express = require("express"); // Import express
const app = express(); // Create express app
const PORT = 3000; // Define port

const routes = require("./routes"); // Create routes

// require server loading server configuration
const sequelize = require("./config/db.js");
const auth = require("./config/auth");

app.use(express.json()); // Parse JSON bodies
app.use(auth.optional);
app.use("/", routes);

// try and catch to database
try {
	sequelize.authenticate();
	sequelize.sync();
	console.log("Connected to database");
} catch (error) {
	console.log("Error connecting to database");
}

app.listen(PORT, () => {
	// Start server
	console.log(`Server is listening on port ${PORT}`); // Log message
});
