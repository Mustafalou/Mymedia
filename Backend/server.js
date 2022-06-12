const express = require('express')
let routes = require("./routes")
const cors = require("cors")
const app = express()
let sequelize = require("./db")
app.use(express.json());
app.use(cors())
sequelize.sync()
app.use("/",routes)
app.listen(8000, "0.0.0.0",() => {
    console.log("Serveur à l'écoute")
    }
)