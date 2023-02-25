const express = require("express");

const app = express();

app.get("/:option?", (req, res, _) => {
  res.send("lorem");
  console.log(req.query);
});

app.get("/", (req, res, _) => {
  res.send("lorem");
  console.log(req.query);
});
app.listen(3000);
