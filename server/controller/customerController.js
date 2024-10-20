const { CustomerDb } = require("../model/customer"); // Adjust the path as needed
const BaseController = require("./baseController");

class CustomerController extends BaseController {
  constructor() {
    super(CustomerDb);
  }

  // You can add customer-specific methods here if needed
}

module.exports = new CustomerController();
