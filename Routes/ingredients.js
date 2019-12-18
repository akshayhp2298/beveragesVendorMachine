const express = require("express")
const app = express.Router()
const { validateIngredient } = require("../Validator")
app.put("/add/ingredients/quantity/:ingredients/:quantity", validateIngredient,)

module.exports = app
