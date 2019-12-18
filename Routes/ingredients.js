const express = require("express")
const app = express.Router()
const { validateIngredientQty,validateIngredient } = require("../Validator")
const {
  addIngredientQty,
  createIngredients
} = require("../Controller/ingredientController")
app.put(
  "/ingredients/add/quantity/:ingredients/:quantity",
  validateIngredientQty,
  addIngredientQty
)
app.post("/ingredients/create", validateIngredient, createIngredients)
module.exports = app
