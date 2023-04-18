const express = require("express");
const body_parser = require("body-parser");
const dotenv = require("dotenv");
const mangoose = require("mongoose");
const connectDB = require("./config/connctdb");

// Load environmental variables
dotenv.config({ path: "./config/.env" });
// Create the express server
const app = express();
connectDB();
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`The server is running on http://localhost:${PORT}`);
});
