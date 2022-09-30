const express = require("express"); // Import express
const app = express(); // Create express app
const PORT = 3000; // Define port
app.use(express.json()); // Parse JSON bodies

const routes = require("./routes");
// require server loading server configuration
const sequelize = require("./config/db.js");

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
