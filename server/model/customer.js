const mongoose = require("mongoose");

// Customer Schema
const customerSchema = new mongoose.Schema({
  fullname: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone_number: { type: String },
  address: { type: String },
  avatar: {
    data: Buffer,
    contentType: String,
  },
});

// Models
const CustomerDb = mongoose.model("Customer", customerSchema);

module.exports = { CustomerDb };
