const express = require("express");
const router = express.Router();

const productRoutes = require("./productRoutes");
const customerRoutes = require("./customerRoutes");
const orderRoutes = require("./orderRoutes");
const saleRoutes = require("./saleRoutes");
const materialRoutes = require("./materialRoutes");
const employeeRoutes = require("./employeeRoutes");
const fileRoutes = require("./fileRoutes"); // Import file routes

// Use the routes

router.use("/products", productRoutes);
router.use("/customers", customerRoutes);
router.use("/orders", orderRoutes);
router.use("/sales", saleRoutes);
router.use("/materials", materialRoutes);
router.use("/employees", employeeRoutes);
router.use("/files", fileRoutes); // Add file routes

module.exports = router;
