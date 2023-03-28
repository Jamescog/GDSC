const http = require("http");

const urls = process.argv.slice(2);
const results = new Array(urls.length).fill(null);

urls.forEach((url, index) => {
  http
    .get(url, (response) => {
      let data = "";
      response.setEncoding("utf8");

      response.on("data", (chunk) => {
        data += chunk;
      });

      response.on("end", () => {
        results[index] = data;

        // Check if all results are available
        if (results.every((result) => result !== null)) {
          results.forEach((result) => console.log(result));
        }
      });
    })
    .on("error", (error) => {
      console.error(`Error fetching data from ${url}: ${error.message}`);
    });
});
