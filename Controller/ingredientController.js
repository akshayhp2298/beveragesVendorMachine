const { addIngredient } = require("../DB")
module.exports.addIngredient = async (req, res) => {
  const ingredient = req.params.ingredient
  const qty = req.params.quantity
  await addIngredient(ingredient, qty)
  res.send({ done: true, message: "ingredient added" })
}
