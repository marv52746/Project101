const { MaterialDb } = require("../model/material"); // Adjust the path as needed
const BaseController = require("./baseController");

class MaterialController extends BaseController {
  constructor() {
    super(MaterialDb);
  }

  // You can add material-specific methods here if needed
}

module.exports = new MaterialController();
