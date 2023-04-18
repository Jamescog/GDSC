import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
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
});

module.exports = mongoose.model("User", userSchema);
