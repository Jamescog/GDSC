const fs = require("fs");
const path = require("path");

const dirPath = process.argv[2];
const extension = process.argv[3];

if (!dirPath || !extension) {
  console.error(
    "Please provide a directory path and an extension as arguments"
  );
  process.exit(1);
}

fs.readdir(dirPath, (err, files) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }

  const filteredFiles = files.filter((file) => {
    return path.extname(file) === `.${extension}`;
  });

  filteredFiles.forEach((file) => console.log(file));
});
