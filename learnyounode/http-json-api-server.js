const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
  const { pathname, query } = url.parse(req.url, true);

  if (pathname === "/api/parsetime") {
    const iso = new Date(query.iso);
    const response = {
      hour: iso.getHours(),
      minute: iso.getMinutes(),
      second: iso.getSeconds(),
    };
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(response));
  } else if (pathname === "/api/unixtime") {
    const iso = new Date(query.iso);
    const response = { unixtime: iso.getTime() };
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(response));
  } else {
    res.writeHead(404);
    res.end();
  }
});

server.listen(process.argv[2]);
