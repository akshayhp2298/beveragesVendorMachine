const express = require("express")
const app = express.Router()
const { validateIngredientQty } = require("../Validator")
const {
  addIngredientQty,
  createIngredient
} = require("../Controller/ingredientController")
app.put(
  "/ingredients/add/quantity/:ingredients/:quantity",
  validateIngredientQty,
  addIngredientQty
)
app.post("/ingredients/create", validateIngredient, createIngredient)
module.exports = app
