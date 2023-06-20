const express = require("express");
const router = express.Router();
const { getAllProducts, createProduct, getProductById , getcategories} = require("../controllers/product");

// Route for fetching all products
router.get("/", getAllProducts);
// Route for creating a new product
router.post("/", createProduct);
// Route for fetching a product by ID
router.get("/:id", getProductById);
// Route for fetching a product by catoriges
// router.get("/categories", categories);
module.exports = router;
