const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema(
  {
    title: String,
    required: true,
    minLength: 5,
  },
  {
    body: String,
  },
  {
    createdAt: Date,
    default: Date.now,
  }
);

const Note = mongoose.model("Note", noteSchema);
module.exports = Note;
