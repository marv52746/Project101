const express = require("express");
const router = express.Router();
const employeeController = require("../controller/employeeController");
const multer = require("multer");
const upload = multer();

router.post("/", upload.none(), employeeController.create); // POST /employees
router.get("/", employeeController.getAll); // GET /employees
router.get("/:id", employeeController.getById); // GET /employees/:id
router.put("/:id", upload.none(), employeeController.update); // PUT /employees/:id
router.delete("/:id", employeeController.delete); // DELETE /employees/:id

module.exports = router;
