const router = require("express").Router();
const gods = require("./rts_gods");

router.get("/", (req, res) => {
	res.json({ info: "welcome to gods API!" });
});

router.use("/gods", gods);

module.exports = router;
