const express = require("express")
const routes = require('./Routes')
const app = express()
const morgan = require('morgan')
app.use(express.json())
app.use(morgan('tiny'))
app.use(routes)

module.exports = app
