const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

// Product Schema
const productSchema = new mongoose.Schema({
  name: { type: String },
  description: { type: String },
  price: { type: Number },
  image_ids: [{ type: String }],
  category: { type: String }, // e.g., bread, pastry, cake
  isAvailable: { type: Boolean, default: true },
});

// Stock Schema
const stockSchema = new mongoose.Schema({
  product: {
    _id: {
      type: ObjectId,
      ref: "Product",
    },
    quantity: { type: Number, required: true },
  },
  dateAdded: { type: Date, default: Date.now },
});

// Promotion Schema
const promotionSchema = new mongoose.Schema({
  product: {
    type: ObjectId,
    ref: "Product",
  },
  discountPercentage: { type: Number, required: true },
  startDate: { type: Date },
  endDate: { type: Date },
});

// Models
const ProductDb = mongoose.model("Product", productSchema);
const StockDb = mongoose.model("Stock", stockSchema);
const PromotionDb = mongoose.model("Promotion", promotionSchema);

module.exports = { ProductDb, StockDb, PromotionDb };
