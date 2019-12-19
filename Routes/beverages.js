const express = require("express")
const app = express.Router()
const { validateAvailability, validateBeverageType ,validateBeverage} = require("../Validator/beveragesValidator")
const {
  orderBeverage,
  getAllBeverages,
  createBeverages
} = require("../Controller/beveragesController")
const { checkQty } = require("../Controller/notifyStaffController")
app.post(
  "/beverages/order",
  validateBeverageType,
  validateAvailability,
  orderBeverage,
  checkQty
)

app.post(
  "/beverages/create",
  validateBeverage,
  createBeverages
)

app.get("/beverages/get/all", getAllBeverages)

module.exports = app
