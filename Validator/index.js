const {
  getIngredientsQty,
  getOneBeverage,
  getBeverageIngredient
} = require("../DB/db")

module.exports.validateIngredientQty = async (req, res, next) => {
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
module.exports.validateIngredient = (req, res,next) => {
  const qty = req.body.quantity
  const ingredient = req.body.ingredient
  if (!qty || !ingredient) {
    res
      .status(404)
      .send({ done: false, message: "ingredient or quantity not found" })
    return
  }
  next()
}

module.exports.validateBeverage = (req, res,next) => {
  const name = req.body.name
  const ingredient = req.body.ingredient
  if (!name || !ingredient) {
    res
      .status(404)
      .send({ done: false, message: "name or ingredient not found" })
    return
  }
  for (var key in ingredient) {
    var current = await getIngredientsQty(key)
    if (!current) {
      res.status(404).send("ingredient not available")
      return
    }
  }
  next()
}
