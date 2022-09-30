const router = require("express").Router();

const { signUp } = require("../controllers/users");

router.post("/signup", signUp);

module.exports = router;
