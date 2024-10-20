const express = require("express");
const router = express.Router();
const customerController = require("../controller/customerController");
const multer = require("multer");
const upload = multer();

router.post("/", upload.none(), customerController.create); // POST /customers
router.get("/", customerController.getAll); // GET /customers
router.get("/:id", customerController.getById); // GET /customers/:id
router.put("/:id", upload.none(), customerController.update); // PUT /customers/:id
router.delete("/:id", customerController.delete); // DELETE /customers/:id

module.exports = router;
