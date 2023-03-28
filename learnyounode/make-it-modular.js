const filterFilesByExtension = require("./mymodule");

const dirPath = process.argv[2];
const extension = process.argv[3];

if (!dirPath || !extension) {
  console.error(
    "Please provide a directory path and an extension as arguments"
  );
  process.exit(1);
}

filterFilesByExtension(dirPath, extension, (err, filteredFiles) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }

  filteredFiles.forEach((file) => console.log(file));
});
