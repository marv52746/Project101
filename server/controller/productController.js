const { ProductDb } = require("../model/product"); // Adjust the path as needed
const BaseController = require("./baseController");

class ProductController extends BaseController {
  constructor() {
    super(ProductDb);
  }

  // You can add product-specific methods here if needed
}

module.exports = new ProductController();
