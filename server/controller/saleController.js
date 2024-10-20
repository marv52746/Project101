const { SaleDb } = require("../model/sale"); // Adjust the path as needed
const BaseController = require("./baseController");

class SaleController extends BaseController {
  constructor() {
    super(SaleDb);
  }

  // You can add sale-specific methods here if needed
}

module.exports = new SaleController();
