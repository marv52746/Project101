const express = require("express");
const router = express.Router();
const saleController = require("../controller/saleController");
const multer = require("multer");
const upload = multer();

router.post("/", upload.none(), saleController.create); // POST /sales
router.get("/", saleController.getAll); // GET /sales
router.get("/:id", saleController.getById); // GET /sales/:id
router.put("/:id", upload.none(), saleController.update); // PUT /sales/:id
router.delete("/:id", saleController.delete); // DELETE /sales/:id

module.exports = router;
