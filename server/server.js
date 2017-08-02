const http = require("http");

const hostname = "127.0.0.1";
const port = 8080;

const server = http.createServer((req, res) => {
  console.log(`Request received: ${req.method} ${req.url}`);
  console.log(req.headers);
  res.statusCode = 200;
  res.end();
});

server.listen(port, hostname, () => {
  console.log(`Accepting requests on http://${hostname}:${port}`);
});
