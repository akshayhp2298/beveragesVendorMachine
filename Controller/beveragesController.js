const { getAllBeverages, addBeverages } = require("../DB/beverages")
const { updateIngredientsQty } = require("../DB/ingredients")
module.exports.orderBeverage = async (req, res, next) => {
  const ingredients = req.body.ingredients
  for (var key in ingredients) {
    var value = ingredients[key]
    await updateIngredientsQty(key, value)
  }
  res.send({ done: true, message: "order placed" })
  next()
}

module.exports.getAllBeverages = async (req, res, next) => {
  const beverages = await getAllBeverages()
  let response = []
  beverages.forEach(beverage => {
    response.push(beverage.name)
  })
  res.send({ done: true, beverages: response })
}

module.exports.createBeverages = async (req, res, next) => {
  const name = req.body.name
  const ingredient = req.body.ingredient
  await addBeverages(name, ingredient)
  res.send({ done: true, message: "Beverage added" })
}
