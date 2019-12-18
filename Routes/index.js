const express = require("express")
const app = express.Router()
const ingredients = require("./ingredients")
const beverages = require("./beverages")
const routes = [ingredients, beverages]
routes.forEach(route => {
  app.use("/api",route)
})
module.exports = app
