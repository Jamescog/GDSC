const express = require("express");
const router = express.Router();
const { createNewUser, loginUser } = require("../controllers/auth");

router.route("/signup").post(createNewUser);
router.route("/login").post(loginUser);

module.exports = router;
