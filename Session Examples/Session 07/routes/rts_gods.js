const router = require("express").Router();
const auth = require("../config/auth");

const {
	getGod,
	getGods,
	createGod,
	updateGod,
	deleteGod,
} = require("../controllers/Cntrlr_gods");

router.get("/:id", getGod);
router.get("/", getGods);
router.post("/", auth.required, createGod);
router.patch("/:id", auth.required, updateGod);
router.delete("/:id", auth.isAdmin, deleteGod);

module.exports = router;
