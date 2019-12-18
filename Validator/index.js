const {
  getIngredientsQty,
  getOneBeverage,
  getBeverageIngredient
} = require("../DB/db")

module.exports.validateIngredient = async (req, res, next) => {
  const ingredient = req.params.ingredient
  const qty = req.params.qty
  if (!qty || !ingredient) {
    res
      .status(404)
      .send({ done: false, message: "Ingredient or qty not found" })
    return
  }
  const ingredientDB = await getOneIngredient(ingredient)
  if (!ingredientDB) {
    res.status(404).send({ done: false, message: "Ingredient not found" })
    return
  }
  next()
}

module.exports.validateBeverageType = async (req, res, next) => {
  let type = req.body.type
  type = type.toLowerCase()
  const beverage = await getOneBeverage(req.body.type)
  if (!beverage) {
    res.status(404).send({ done: false, message: "type not found" })
    return
  }
  req.body.type = type
  next()
}

module.exports.validateAvailability = async (req, res, next) => {
  const coffee = req.body.type
  const ingredients = await getBeverageIngredient(coffee)
  for (var key in ingredients) {
    var value = ingredients[key]
    var current = await getIngredientsQty(key)
    console.log(current)
    if (current < value) {
      res.send("quantity not available")
      return
    }
  }
  req.body.ingredients = ingredients
  next()
}
