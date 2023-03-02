const express = require("express");
const path = require("path");
const router = express.Router();

router.use("/", (req, res, next) => {
  console.log("Sending love from admin.js");
  res.sendFile(path.join(__dirname, "..", "views", "add-product.html"));
});

module.exports = router;
