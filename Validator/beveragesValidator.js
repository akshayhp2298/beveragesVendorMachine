const {
  getOneBeverage,
  getBeverageIngredient
} = require("../DB/beverages")
const {
  getOneIngredient,
  getIngredientsQty,
} = require("../DB/ingredients")
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
    if (current < value) {
      res.status(404).send({done:false,message:"quantity not available"})
      return
    }
  }
  req.body.ingredients = ingredients
  next()
}

module.exports.validateBeverage =async (req, res,next) => {
  const name = req.body.name
  const ingredient = req.body.ingredient
  if (!name || !ingredient) {
    res
      .status(404)
      .send({ done: false, message: "name or ingredient not found" })
    return
  }
  for (var key in ingredient) {
    var current = await getOneIngredient(key)
    if (!current) {
      res.status(404).send({done:false,message:"ingredient not available"})
      return
    }
  }
  next()
}