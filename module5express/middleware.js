const express = require("express");

const app = express();

app.use("/hi", (req, res, next) => {
  console.log(req.ip);
  res.send("Hi");
});

app.use("/", (req, res, next) => {
  console.log("but in another middleware " + req.ip);
  res.send("hello"); //express can set the header Content-Type for you
});
const PORT = 3000;
app.listen(PORT, (_) => {
  console.log("App listening on http://localhost:" + PORT);
});
