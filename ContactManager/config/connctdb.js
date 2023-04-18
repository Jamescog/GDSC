const mongoose = require("mongoose");

const connectDB = async () => {
  const conn = await mongoose.connect(process.env.DB_URI, {
    // useNewUrlParser: true,
    // useCreateIndex: true,
    // useFindAndModify: false,
  });

  console.log(
    `MongoDB Connected: ${conn.connection.host}`.brightGreen.bold.underline
  );
};

module.exports = connectDB;
