import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  name: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },
  address: { type: String },
  notes: { type: String },
});

module.exports = mongoose.model("Contact", contactSchema);
