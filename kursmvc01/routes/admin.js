const express = require("express");

const productControler = require("../controllers/products");

const router = express.Router();

// /admin/add-product => GET
router.get("/add-product", productControler.getAddProduct);

// /admin/add-product => POST
router.post("/add-product", productControler.postAddProduct);

exports.routes = router;
exports.products = products;
