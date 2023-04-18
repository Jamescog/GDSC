const express = require("express");
const body_parser = require("body-parser");

app = express();
app.use(body_parser.urlencoded({ extended: false }));
app.use(express.static("static"));
app.set("view engine", "pug");
app.post("/greet", (req, res) => {
  const name = req.body.name;
  const age = req.body.age;
  res.render("send_greeting", { name, age });
});
app.listen(5000, () => {
  console.log(`the  is up and running`);
});
