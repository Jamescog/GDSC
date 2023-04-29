const express = require("express");
const authRouter = express.Router();
const {
  createNewUser,
  loginUser,
  updateUser,
  deleteUser,
} = require("../controllers/auth");

authRouter.route("/signup").post(createNewUser);
authRouter.route("/login").post(loginUser);
authRouter.route("/update").post(updateUser);
authRouter.route("/delete").post(deleteUser);

module.exports = authRouter;
