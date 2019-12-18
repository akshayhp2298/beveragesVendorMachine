const loki = require("lokijs")
let db = new loki("tmp.json")
type = {
  "black coffee": { water: 3, sugar: 1, coffee: 1 },
  "sugarless black coffee": { water: 3, coffee: 1 },
  "coffee with milk": { water: 1, sugar: 1, coffee: 1, milk: 2 },
  "sugarless coffee with milk": { water: 1, coffee: 1, milk: 2 }
}
// Add a collection to the database
var ingredients = db.addCollection("ingredients")
var beverages = db.addCollection("beverages")
// Add some documents to the collection
ingredients.insert({ name: "coffee", qty: 10 })
ingredients.insert({ name: "water", qty: 10 })
ingredients.insert({ name: "milk", qty: 10 })
ingredients.insert({ name: "sugar", qty: 10 })
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


//get one ingredient
module.exports.getOneIngredient = (name)=>{
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

//get all beverages
module.exports.getAllBeverages = () => {
  let beverage = beverages.find({})
  return beverage
}

//get beverage by name
module.exports.getOneBeverage = name => {
    let beverage = beverages.findOne({name})
    return beverage
  }

//get ingredient required by beverages
module.exports.getBeverageIngredient = name => {
  let beverage = beverages.findOne({ name })
  return beverage.ingredient
}
