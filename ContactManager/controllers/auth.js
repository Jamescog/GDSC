const jwt = require("jsonwebtoken");
const User = require("../models/user");
const {
  hashPassword,
  comparePassword,
} = require("../midddlewares/bcrypt_manager");

exports.createNewUser = async (req, res, next) => {
  try {
    const { firstName, lastName, username, email, password } = req.body;
    const expectedProperties = [
      "firstName",
      "lastName",
      "username",
      "email",
      "password",
    ];

    expectedProperties.forEach((prop) => {
      if (!req.body.hasOwnProperty(prop)) {
        return res.status(400).json({
          success: false,
          message: `Missing ${prop}`,
        });
      }
    });

    // Hash password
    const hashedPassword = await hashPassword(password);

    // Create new user
    const user = new User({
      firstName,
      lastName,
      username,
      email,
      password: hashedPassword,
    });
    await user.save();

    // Return success response
    return res.status(201).json({
      success: true,
      data: user,
    });
  } catch (err) {
    console.error(err);
    next(err);
  }
};
exports.loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    // Check if email and password were provided
    if (!email || !password) {
      return res
        .status(400)
        .json({ success: false, message: "Missing email or password" });
    }

    // Find user by email
    const user = await User.findOne({ email });

    // If user not found, return error
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    // Compare password with stored hash
    const passwordMatch = await comparePassword(password, user.password);
    if (!passwordMatch) {
      return res
        .status(401)
        .json({ success: false, message: "Incorrect password" });
    }

    // Generate and return JWT token
    const token = jwt.sign({ email }, process.env.JWT_SECRET);
    return res.status(200).json({ success: true, token });
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .json({ success: false, message: "Internal server error" });
  }
};

exports.updateUser = async (req, res, next) => {
  try {
    const { email } = req.body;
    const update = await User.findOneAndUpdate({ email }, req.body, {
      new: true,
    });
    res.status(200).json({ updating });
  } catch (err) {
    return res.status(404).json({ success: false, message: err.message });
  }
};

exports.deleteUser = async (req, res, next) => {
  try {
    const { email } = req.body;
    const deleted = await User.findOneAndDelete({ email });
    return res.status(200).json({ deleted });
  } catch (err) {
    next(err.message);
  }
};
