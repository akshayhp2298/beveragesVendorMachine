const { getAllIngredients } = require("../DB/db")

module.exports.checkQty = async() => {
    let ingredients = await getAllIngredients()
    ingredients.forEach(async ingredient=>{
        if(ingredient.qty <= 2) {
            await notifyStaff()
        }
    })
}

function notifyStaff(){
    console.log("notifing staff")
}
