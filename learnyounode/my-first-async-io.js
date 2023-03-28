const fs = require("fs");

const filePath = process.argv[2];

if (!filePath) {
  console.error("Please provide a file path as the first argument");
  process.exit(1);
}

fs.readFile(filePath, "utf8", (err, data) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }

  const numberOfLines = data.split("\n").length - 1;

  console.log(numberOfLines);
});
