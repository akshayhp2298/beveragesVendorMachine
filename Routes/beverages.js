const express = require("express")
const app = express.Router()
const { validateAvailability, validateBeverageType } = require("../Validator")
const {
  orderBeverage,
  getAllBeverages
} = require("../Controller/beveragesController")
const { checkQty } = require("../Controller/notifyStaffController")
app.post(
  "/order/beverages",
  validateBeverageType,
  validateAvailability,
  orderBeverage,
  checkQty
)
app.get("/get/all/beverages", getAllBeverages)

module.exports = app
