const express = require("express");
const router = express.Router();
const productController = require("../controller/productController");
const multer = require("multer");
const upload = multer();

router.post("/", upload.none(), productController.create); // POST /products
router.get("/", productController.getAll); // GET /products
router.get("/:id", productController.getById); // GET /products/:id
router.put("/:id", upload.none(), productController.update); // PUT /products/:id
router.delete("/:id", productController.delete); // DELETE /products/:id

module.exports = router;
