const express = require("express");
const PORT = process.argv[2];

const app = express();
app.get("/search", (req, res) => {
  const queries = req.query;
  res.json(queries);
});
app.listen(PORT);
