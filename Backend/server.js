const express = require('express')
let routes = require("./routes")
const app = express()
let sequelize = require("./db")
sequelize.sync()
app.use("/",routes)
app.listen(8000, "0.0.0.0",() => {
    console.log("Serveur à l'écoute")
    }
)