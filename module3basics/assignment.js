const http = require("http");

const users = [];

const app = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;

  if (url == "/" && method == "GET") {
    res.setHeader("Content-Type", "text/html");
    res.write(`
    <html>
     <h1>Hi</h1>
     <form method="POST" action="/">
        <input type="text" name="name"/>
        <input type="submit">
     </form>
    </html>
    `);
    return res.end();
  }
  if (url == "/" && method == "POST") {
    const buffers = [];
    req.on("data", (chunk) => {
      buffers.push(chunk);
    });
    req.on("end", () => {
      users.push(Buffer.concat(buffers).toString().split("=")[1]);
      res.statusCode = 302;
      res.setHeader("Location", "/users");
      return res.end();
    });
  }
  if (url == "/users" && method == "GET") {
    res.write(`${users}`);
    res.end();
  }
});

const _port = 3000;
app.listen(_port, () => {
  console.log("Listening on http://localhost:" + _port);
});
