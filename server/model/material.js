const mongoose = require("mongoose");

// Warehouse Material Schema
const materialSchema = new mongoose.Schema({
  name: { type: String, required: true },
  quantity: { type: Number, required: true },
  unit: { type: String }, // e.g., kg, liters
  dateAdded: { type: Date, default: Date.now },
});

// Models
const MaterialDb = mongoose.model("Material", materialSchema);

module.exports = { MaterialDb };
