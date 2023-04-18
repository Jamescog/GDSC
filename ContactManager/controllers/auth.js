const jwt = require("jsonwebtoken");
const User = require("../models/user");
const {
  hashPassword,
  comparePassword,
} = require("../midddlewares/bcrypt_manager");

exports.createNewUser = async (req, res, next) => {
  try {
    const { firstName, lastName, username, email, password } = req.body;

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
    res.status(201).json({
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
      return res.status(400).send("Missing email or password");
    }

    // Find user by email
    const user = await User.findOne({ email });

    // If user not found, return error
    if (!user) {
      return res.status(404).send("User not found");
    }

    // Compare password with stored hash
    const passwordMatch = await comparePassword(password, user.password);
    if (!passwordMatch) {
      return res.status(401).send("Incorrect password");
    }

    // Generate and return JWT token
    const token = jwt.sign({ email }, process.env.JWT_SECRET);
    res.send({ token });
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal server error");
  }
};
