const fs = require("fs");

const filePath = process.argv[2];

if (!filePath) {
  console.error("Please provide a file path as the first argument");
  process.exit(1);
}

const fileContents = fs.readFileSync(filePath, "utf8");

const numberOfLines = fileContents.split("\n").length - 1;

console.log(numberOfLines);
