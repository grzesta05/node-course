const http = require("http");

const routes = require("./routes");

const app = http.createServer(routes);

const _port = 3000;
app.listen(_port, () => {
  console.log("http://localhost:" + _port);
});
