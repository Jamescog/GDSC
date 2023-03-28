const http = require("http");

const server = http.createServer((req, res) => {
  if (req.method === "POST") {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk.toString().toUpperCase();
    });
    req.on("end", () => {
      res.end(body);
    });
  } else {
    res.statusCode = 405;
    res.end();
  }
});

const port = process.argv[2] || 8000;
server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
