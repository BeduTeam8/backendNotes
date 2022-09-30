const router = require("express").Router();
const gods = require("./rts_gods");
const users = require("./users");

router.get("/", (req, res) => {
	res.json({ info: "welcome to gods API!" });
});

router.use("/gods", gods);

router.use("/users", users);

module.exports = router;
