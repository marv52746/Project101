const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

// Payment Schema
const paymentSchema = new mongoose.Schema({
  order: {
    type: ObjectId,
    ref: "Order",
    required: true,
  },
  amount: { type: Number, required: true },
  paymentMethod: {
    type: String,
    enum: ["cash", "credit_card", "mobile_payment"],
    required: true,
  },
  paymentDate: { type: Date, default: Date.now },
  status: {
    type: String,
    enum: ["pending", "completed", "failed"],
    default: "pending",
  },
});

// Models
const PaymentDb = mongoose.model("Payment", paymentSchema);

module.exports = { PaymentDb };
