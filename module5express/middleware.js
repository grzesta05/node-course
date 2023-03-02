const bodyParser = require("body-parser");
const express = require("express");
const path = require("path");

const routerShop = require("./routes/shop");
const routerAdmin = require("./routes/admin");

const app = express();

app.use(bodyParser.urlencoded({ extended: false })); // Express doeas data extracting fro request easier - basically for us
app.use(express.static(path.join(__dirname, "public"))); // You have to show where is the static folder by path

app.use("/shop", routerShop);

app.use("/admin", routerAdmin);

app.use("/", (req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

const PORT = 3000;
app.listen(PORT, (_) => {
  console.log("App listening on http://localhost:" + PORT);
});
