const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: (emailString) => {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailString);
    },
    message: (props) => ~`${props.value} is not a valid email`,
  },
  password: {
    type: String,
    unique: true,
    required: true,
  },
  avatar: {
    type: String,
    default: "no-avatar.jpg",
  },
});

module.exports = mongoose.model("User", userSchema);
