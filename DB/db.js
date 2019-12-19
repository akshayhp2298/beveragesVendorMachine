const loki = require("lokijs")
let db = new loki("tmp.json")
module.exports.db = db
