const router = require("express").Router();
const {
	getGod,
	getGods,
	createGod,
	updateGod,
	deleteGod,
} = require("../controllers/Cntrlr_gods");

router.get("/:id", getGod);
router.get("/", getGods);
router.post("/", createGod);
router.patch("/:id", updateGod);
router.delete("/:id", deleteGod);

module.exports = router;
