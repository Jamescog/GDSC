const express = require("express");
const fs = require("fs");
const PORT = process.argv[2];
const path = process.argv[3];

const app = express();
app.get("/books", (req, res) => {
  fs.readFile(path, (error, data) => {
    if (error) {
      console.log(`can't read the file`);
    } else {
      const file = data.toString();
      const parsed = JSON.parse(file);
      res.json(parsed);
    }
  });
});
app.listen(PORT);
