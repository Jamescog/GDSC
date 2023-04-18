const express = require("express");
const body_parser = require("body-parser");
const dotenv = require("dotenv");
const mangoose = require("mongoose");
const connectDB = require("./config/connctdb");
const morgan = require("morgan");
const colors = require("colors");

// Route files
const auth = require("./routes/auth");
const { json } = require("body-parser");

// Load environmental variables
dotenv.config({ path: "./config/.env" });
// Create the express server
const app = express();
connectDB();
//mount routers
app.use(morgan("dev"));
app.use(json());
app.use("/api/v1/auth", auth);
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
