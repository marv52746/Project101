const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

// Sale Schema
const saleSchema = new mongoose.Schema({
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
  saleDate: { type: Date, default: Date.now },
});

// Models
const SaleDb = mongoose.model("Sale", saleSchema);

module.exports = { SaleDb };
