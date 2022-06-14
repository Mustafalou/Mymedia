var Sequelize = require("sequelize")
var sequelize = require("../db")
const {Friend} = require("./User")
const Message = sequelize.define("message",{
        id:{type:Sequelize.INTEGER,autoIncrement:true,allowNull:false,primaryKey:true},
        message:{type:Sequelize.STRING,allowNull:false}
    }
)
Friend.hasMany(Message)

module.exports = Message