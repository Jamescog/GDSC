const express = require("express");
const {
  getAllContacts,
  getOneContact,
  createContact,
} = require("../controllers/contacts");
const contactRouter = express.Router();

contactRouter.get("/", getAllContacts);
contactRouter.post("/", createContact);

module.exports = contactRouter;
