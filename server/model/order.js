const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

// Order Schema
const orderSchema = new mongoose.Schema({
  customer: {
    _id: {
      type: ObjectId,
      ref: "Customer",
    },
    fullname: { type: String, required: true },
  },
  products: [
    {
      product: {
        _id: {
          type: ObjectId,
          ref: "Product",
        },
        name: { type: String, required: true },
        quantity: { type: Number, required: true },
      },
    },
  ],
  totalAmount: { type: Number, required: true },
  orderDate: { type: Date, default: Date.now },
  status: {
    type: String,
    enum: ["pending", "completed", "canceled"],
    default: "pending",
  },
});

// Models
const OrderDb = mongoose.model("Order", orderSchema);

module.exports = { OrderDb };
