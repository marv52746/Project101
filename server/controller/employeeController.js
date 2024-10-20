const { EmployeeDb } = require("../model/employee"); // Adjust the path as needed
const BaseController = require("./baseController");

class EmployeeController extends BaseController {
  constructor() {
    super(EmployeeDb);
  }

  // You can add employee-specific methods here if needed
}

module.exports = new EmployeeController();
