const {db} = require("./db")
var beverages = db.addCollection("beverages")
beverages.insert({
  name: "black coffee",
  ingredient: { water: 3, sugar: 1, coffee: 1 }
})
beverages.insert({
  name: "sugarless black coffee",
  ingredient: { water: 3, coffee: 1 }
})
beverages.insert({
  name: "coffee with milk",
  ingredient: { water: 1, sugar: 1, coffee: 1, milk: 2 }
})
beverages.insert({
  name: "sugarless coffee with milk",
  ingredient: { water: 1, milk: 2, coffee: 1 }
})

//add ingredient
module.exports.addBeverages = async (name, ingredientsData) => {
  beverages.insert({ name, ingredient: ingredientsData })
}
//get all beverages
module.exports.getAllBeverages = () => {
  let beverage = beverages.find({})
  return beverage
}

//get beverage by name
module.exports.getOneBeverage = name => {
  let beverage = beverages.findOne({ name })
  return beverage
}

//get ingredient required by beverages
module.exports.getBeverageIngredient = name => {
  let beverage = beverages.findOne({ name })
  return beverage.ingredient
}
