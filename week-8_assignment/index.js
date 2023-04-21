const { compareSync } = require("bcrypt");
const app = require("./app");

app.listen(process.env.PORT, () => {
  console.log(
    `the server is running at: http://localhost:${process.env.PORT}`.blue
      .bgWhite.bold
  );
});
