const { addIngredient,addIngredientsQty } = require("../DB/ingredients")
module.exports.addIngredientQty = async (req, res) => {
  const ingredient = req.params.ingredient
  const qty = req.params.quantity
  await addIngredientsQty(ingredient, qty)
  res.send({ done: true, message: "ingredient quantity added" })
}

module.exports.createIngredients = async (req, res) => {
  const ingredient = req.body.ingredients
  const qty = req.body.quantity
  await addIngredient(ingredient, qty)
  res.send({ done: true, message: "ingredient added" })
}
