const express = require("express");
const router = express.Router();
const materialController = require("../controller/materialController");
const multer = require("multer");
const upload = multer();

router.post("/", upload.none(), materialController.create); // POST /materials
router.get("/", materialController.getAll); // GET /materials
router.get("/:id", materialController.getById); // GET /materials/:id
router.put("/:id", upload.none(), materialController.update); // PUT /materials/:id
router.delete("/:id", materialController.delete); // DELETE /materials/:id

module.exports = router;
