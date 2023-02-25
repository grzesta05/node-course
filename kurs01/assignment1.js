const http = require("http");

const server = http.createServer((req, resp) => {
  console.log(req.method);
  console.log(req.url);
});

server.listen(3000);
