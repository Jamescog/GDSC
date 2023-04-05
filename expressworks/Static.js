const express = require("express");
const PORT = process.argv[2];

const app = express();

app.use(express.static("public"));
app.listen(PORT);
