const {db} = require("./db")
var ingredients = db.addCollection("ingredients")

// Add some documents to the collection
ingredients.insert({ name: "coffee", qty: 10 })
ingredients.insert({ name: "water", qty: 10 })
ingredients.insert({ name: "milk", qty: 10 })
ingredients.insert({ name: "sugar", qty: 10 })

//add ingredient qty
module.exports.addIngredient = async (name, qty) => {
  ingredients.insert({ name, qty })
}
//get one ingredient
module.exports.getOneIngredient = name => {
  let ingredient = ingredients.findOne({ name })
  return ingredient
}
// add qty in ingredient document
module.exports.addIngredientsQty = (name, qty) => {
  let ingredient = ingredients.findOne({ name })
  ingredient.qty += qty
  ingredients.update(ingredient)
}
// get qty from ingredient document
module.exports.getIngredientsQty = name => {
  let ingredient = ingredients.findOne({ name })
  return ingredient.qty
}
// update qty in ingredient document
module.exports.updateIngredientsQty = (name, qty) => {
  let ingredient = ingredients.findOne({ name })
  ingredient.qty -= qty
  ingredients.update(ingredient)
}

//get all ingredients
module.exports.getAllIngredients = () => {
  let ingredient = ingredients.find({})
  return ingredient
}
