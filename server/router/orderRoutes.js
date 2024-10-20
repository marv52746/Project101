const express = require("express");
const router = express.Router();
const orderController = require("../controller/orderController");
const multer = require("multer");
const upload = multer();

router.post("/", upload.none(), orderController.create); // POST /orders
router.get("/", orderController.getAll); // GET /orders
router.get("/:id", orderController.getById); // GET /orders/:id
router.put("/:id", upload.none(), orderController.update); // PUT /orders/:id
router.delete("/:id", orderController.delete); // DELETE /orders/:id

module.exports = router;
