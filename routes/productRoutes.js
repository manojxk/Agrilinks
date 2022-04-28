const express = require("express");
const router = express.Router();
const Product = require("../models/productModel");

const { createProduct, getProduct } = require("../controllers/productControllers");
router.post("/reports", createProduct);
router.get("/reports", getProduct);
module.exports = router;