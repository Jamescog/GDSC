const fs = require("fs").promises;

fs.readFile("dummy.txt", "utf8")
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.error("I couldn't get/read that dummy text");
  });
