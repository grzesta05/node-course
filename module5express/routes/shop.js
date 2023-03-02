const express = require("express");
const path = require("path");
const router = express.Router();

router.use("/", (req, res, next) => {
  console.log("Sending love from shop.js");
  res
    .status(200)
    .sendFile(
      path.join(
        __dirname,
        ".." /*Exception where we use / - go up */,
        "views",
        "shop.html"
      )
    ); // Use path join to normalize addresses - dont use "/" or "\"
});

module.exports = router;
