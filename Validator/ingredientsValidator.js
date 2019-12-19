const {
    getOneIngredient,
    getIngredientsQty,
  } = require("../DB/ingredients")
module.exports.validateIngredient = (req, res, next) => {
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

module.exports.validateIngredientQty = async (req, res, next) => {
  const ingredient = req.params.ingredients
  const qty = req.params.quantity
  const ingredientDB = await getOneIngredient(ingredient)
  if (!ingredientDB) {
    res.status(404).send({ done: false, message: "Ingredient not found" })
    return
  }
  next()
}
