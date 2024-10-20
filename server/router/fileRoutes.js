const express = require("express");
const router = express.Router();
const fileMongoUploadController = require("../controller/fileMongoUploadController");
const multer = require("multer");
const upload = multer(); // Initialize multer for file uploads

// Upload files to MongoDB
router.post(
  "/",
  upload.array("fileData"),
  fileMongoUploadController.uploadFiles
); // POST /files

// View file by filename
router.get("/view-filename/:filename", fileMongoUploadController.viewFile); // GET /files/view-filename/:filename

// View file by ID
router.get("/view-id/:id", fileMongoUploadController.viewFileById); // GET /files/view-id/:id

// Delete file by ID
router.delete("/delete/:id", fileMongoUploadController.deleteFile); // DELETE /files/delete/:id

module.exports = router;
