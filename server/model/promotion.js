const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

// Promotion/Discount Schema
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
const PromotionDb = mongoose.model("Promotion", promotionSchema);

module.exports = { PromotionDb };
