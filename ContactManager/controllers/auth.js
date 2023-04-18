const User = require("../models/user");
const {
  hashPassword,
  comparePassword,
} = require("../midddlewares/hashPassword");

exports.createNewUser = async (req, res, next) => {
  const newAccountData = req.body;

  const firstName = newAccountData.firstName;
  const lastName = newAccountData.lastName;
  const username = newAccountData.username;
  const email = newAccountData.email;
  const password = newAccountData.password;

  try {
    const hashedPassword = await hashPassword(password);
    const user = new User({
      firstName,
      lastName,
      username,
      email,
      password: hashedPassword,
    });
    await user.save();
    res.status(201).json({
      success: true,
      data: user,
    });
  } catch (err) {
    next(err);
  }
};

exports.loginUser = async (req, res, next) => {
  console.log(req.body);
  res.status(200).send("here we go!");
};
