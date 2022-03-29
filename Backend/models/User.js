var Sequelize = require("sequelize")
var sequelize = require("../db")
const User = sequelize.define("user",{
        id:{type:Sequelize.INTEGER,autoIncrement:true,allowNull:false,primaryKey:true},
        username:{type:Sequelize.STRING,allowNull:false},
        password:{type:Sequelize.STRING,allowNull:false},
    }
)
module.exports = User