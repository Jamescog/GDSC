const express = require("express");
const PORT = process.argv[2];

const app = express();
app.put("/message/:id", (req, res) => {
  const id = req.params.id;
  const sha = require("crypto")
    .createHash("sha1")
    .update(new Date().toDateString() + id)
    .digest("hex");

  res.end(sha);
});
app.listen(PORT);
