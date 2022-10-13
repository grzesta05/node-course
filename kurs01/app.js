const http = require("http");

function rqListener(request, response) {
  console.log(request.url, request.method, request.headers);
  //process.exit();
  response.setHeader("Content-Type", "text/html");
  response.write("<h1>Hello world</h1>");
  response.end();
}

const server = http.createServer(rqListener);

server.listen(3000);
