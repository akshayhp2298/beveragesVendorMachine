# Beverage Vending System

## Instruction to start
```bash
npm install
npm start
npm run test
```
## Assumption :
    There are 4 beverages in system.
    1) Black Coffee
    2) Sugarless Black Coffee
    3) Coffee with Milk
    4) Sugarless Coffee with Milk

    There are 4 ingredients in system
    1) Coffee
    2) Water
    3) Milk
    4) Sugar

    Required ingredients to make beverages
    1. Black Coffee :
        Water : 3 units
        Coffee : 1 unit
        Sugar : 1 unit
    2. Sugarless Black Coffee :
        Water : 3 units
        Coffee : 1 unit
    3. Coffee with Milk :
        Water : 1 unit
        Milk : 2 units
        Coffee : 1 unit
        Sugar : 1 unit
    4. Sugarless Coffee with Milk :
        Water : 1 unit
        Coffee : 1 unit
        Milk : 2 units

## API calls
    Create Ingredient
    path : POST "/api/ingredient/create"
    Required body with ingredient and quantity in json format
    Example {
        "ingredient":"coffee",
        "quantity":10
    }

    Create Beverages
    path : POST "/api/beverages/create"
    Required body with name and required ingredient in units in json format
    Example {
        "name":"black coffee"
        "ingredient":{
            water:3,
            coffee:1,
            sugar:1
        },
    }

    Get All Beverages
    path : GET "/api/beverages/get/all"

    Order Beverages
    path : POST "/api/beverages/order"
    Required body with type of beverages in json format
    Example {
        "type":"black coffee"
    }

    Add Quantity of Ingredients
    path : PUT "/api/ingredients/add/quantity/:ingredient/:quantity"
        :ingredient = name of Ingredient
        :quantity = quantity to be added

    * I have used loki.js for in-memory database. 
    * Database have two collections. One for Ingredients and One for beverages.
    * When a request arrives for order of beverages it check whether quantity available for that beverages or not.
       If quantity not available then it will return 404 quantity not available.
       If quantity available then it will place order and decrease quantity in database
       After placing order it will check for quantity to notify staff
    * To add new beverages which has new ingredient that have to add ingredients first
