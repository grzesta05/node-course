const express = require("express");
const productControler = require("../controllers/products");
const router = express.Router();

router.get("/", productControler.getProducts);

module.exports = router;
