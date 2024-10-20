const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

// Feedback/Review Schema
const feedbackSchema = new mongoose.Schema({
  customer: {
    type: ObjectId,
    ref: "Customer",
  },
  product: {
    type: ObjectId,
    ref: "Product",
  },
  rating: { type: Number, min: 1, max: 5 },
  comment: { type: String },
  date: { type: Date, default: Date.now },
});

// Models
const FeedbackDb = mongoose.model("Feedback", feedbackSchema);

module.exports = { FeedbackDb };
