const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

// Employee Schema
const employeeSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  active: {
    type: Boolean,
    default: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
  },
  username: {
    type: String,
    unique: true,
  },
  address: {
    type: String,
  },
  fullname: {
    type: String,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  avatar: {
    data: Buffer,
    contentType: String,
  },
  avatarID: {
    type: String,
  },
  first_name: {
    type: String,
  },
  last_name: {
    type: String,
  },
  date_of_birth: {
    type: String,
  },
  gender: {
    type: String,
  },
  phone_number: {
    type: String,
  },
  registration_date: {
    type: Date,
    default: Date.now,
  },
  last_login: {
    type: Date,
  },
  account_status: {
    type: String,
    enum: ["active", "inactive", "suspended"],
    default: "active",
  },
  account_type: {
    type: String,
    enum: ["regular", "admin", "manager"],
    default: "regular",
  },
  additional_information: {
    type: String,
  },
  store: {
    type: String, // Optional: can refer to a specific bakery branch
  },
  created_on: {
    type: Date,
    default: Date.now,
  },
  created_by: {
    _id: {
      type: ObjectId,
      ref: "User",
    },
    fullname: {
      type: String,
    },
    email: {
      type: String,
    },
  },
  updated_on: {
    type: Date,
  },
  updated_by: {
    _id: {
      type: ObjectId,
      ref: "User",
    },
    fullname: {
      type: String,
    },
    email: {
      type: String,
    },
  },
  role: {
    type: String,
    enum: ["baker", "cashier", "manager", "delivery"],
    required: true,
  },
  hire_date: {
    type: Date,
    required: true,
  },
});

// Models
const EmployeeDb = mongoose.model("Employee", employeeSchema);

module.exports = { EmployeeDb };
