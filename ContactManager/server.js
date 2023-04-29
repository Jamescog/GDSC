const express = require("express");
const body_parser = require("body-parser");
const dotenv = require("dotenv");
const mangoose = require("mongoose");
const connectDB = require("./config/connctdb");
const morgan = require("morgan");
const colors = require("colors");

// Route files
const main = require("./routes/main");

// Load environmental variables
dotenv.config({ path: "./config/.env" });
// Create the express server
const app = express();
connectDB();
app.use(morgan("dev"));
app.use(express.json());
app.use("/api/v1", main);
const PORT = process.env.PORT;
const server = app.listen(PORT, () => {
  console.log(
    `The server is running on http://localhost:${PORT}`.yellow.bold.italic
  );
});

// Handle unhandled rejection
process.on("unhandledRejection", (err, promise) => {
  console.log(`Error: ${err.message}`);

  server.close(() => {
    process.exit(1);
  });
});
