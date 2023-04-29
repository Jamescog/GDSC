const mongoose = require("mongoose");
const Contact = require("../models/contact");

exports.getAllContacts = async (req, res, next) => {
  res.status(200).json({
    success: true,
    data: "All contacts",
  });
};

exports.getOneContact = async (req, res, next) => {
  res.end("Hello");
};

exports.createContact = async (req, res, next) => {
  try {
    const contact = new Contact(req.body);
    await contact.save();
    res.status(201).json({ succuss: true, contact });
  } catch (error) {
    if (error instanceof mongoose.Error.ValidationError) {
      res.status(400).json({ success: false, error: error.message });
    } else if (error.code === 11000) {
      res.status(400).json({ success: false, message: "Duplicate key error" });
    } else {
      console.error(error);
      res.status(500).json({ success: false, error: "Server error" });
    }
  }
};
