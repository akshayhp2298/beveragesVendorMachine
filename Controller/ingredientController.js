const { addIngredient,createIngredient } = require("../DB/db")
module.exports.addIngredientQty = async (req, res) => {
  const ingredient = req.params.ingredient
  const qty = req.params.quantity
  await addIngredient(ingredient, qty)
  res.send({ done: true, message: "ingredient quantity added" })
}

module.exports.createIngredient = async (req, res) => {
  const ingredient = req.body.ingredient
  const qty = req.body.quantity
  await createIngredient(ingredient, qty)
  res.send({ done: true, message: "ingredient added" })
}
