const fs = require("fs");

fs.readFile("dummy.txt", "utf8", (error, data) => {
  if (error) {
    console.log("I couldn't get/read that dummy text");
  } else {
    console.log(data);
  }
});
