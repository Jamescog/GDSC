const express = require("express");
const authRouter = require("./auth");
const contactsRouter = require("./contacts");
const mainrouter = express.Router();

mainrouter.use("/auth", authRouter);
mainrouter.use("/contacts", contactsRouter);

module.exports = mainrouter;
