const { OrderDb } = require("../model/order"); // Adjust the path as needed
const BaseController = require("./baseController");

class OrderController extends BaseController {
  constructor() {
    super(OrderDb);
  }

  // You can add order-specific methods here if needed
}

module.exports = new OrderController();
