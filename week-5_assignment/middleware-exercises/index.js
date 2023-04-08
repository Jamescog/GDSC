const express = require("express");
const fs = require("fs");
const body_parser = require("body-parser");
const { Console } = require("console");

let database;

try {
  const data = fs.readFileSync("user.json", "utf-8");
  database = JSON.parse(data);
} catch (error) {
  console.error(error.message);
}
const protectRoute = (req, res, next) => {
  const expectedName = "Yaekob";
  if (req.path === "/protected") {
    if (!req.query.name) {
      return res.status(401).send("Please provide a name in the query string.");
    }
    if (req.query.name !== expectedName) {
      return res.status(403).redirect("/protected.html");
    }
  }
  next();
};
app = express();
app.use(protectRoute);
app.use(body_parser.urlencoded({ extended: false }));
app.use(express.static("static"));
app.post("/signin", (req, res) => {
  const email = req.body.email;
  const passowrd = req.body.password;
  const user = database.find((user) => user.email === email);
  if (user) {
    if (user.password === passowrd) {
      res.status(200).redirect("/index.html");
    } else {
      res.status(401).redirect("/incorrect_password.html");
    }
  } else {
    res.status(404).redirect("/signup.html");
  }
});

app.get("/protected", (req, res) => {
  res.status(200).redirect("/secret.html");
});
app.listen(3300, () => {
  console.log(`The server is up and running on port 3300`);
});
