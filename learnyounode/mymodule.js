const fs = require("fs");
const path = require("path");

module.exports = function filterFilesByExtension(dirPath, extension, callback) {
  fs.readdir(dirPath, (err, files) => {
    if (err) {
      return callback(err);
    }

    const filteredFiles = files.filter((file) => {
      return path.extname(file) === `.${extension}`;
    });

    return callback(null, filteredFiles);
  });
};
