const express = require("express");
const PORT = Number(process.argv[2]);

const app = express();

app.set('view engine', 'pug')
app.get("/home", (req, res) => {
  res.render('index', {date: new Date().toDateString()})
});

app.listen(PORT);
