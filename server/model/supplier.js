const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

// Supplier Schema
const supplierSchema = new mongoose.Schema({
  name: { type: String, required: true },
  contactPerson: { type: String },
  phone: { type: String },
  email: { type: String },
  address: { type: String },
  materialsSupplied: [{ type: ObjectId, ref: "Material" }],
});

// Models
const SupplierDb = mongoose.model("Supplier", supplierSchema);

module.exports = { SupplierDb };
