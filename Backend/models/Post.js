var Sequelize = require("sequelize")
var sequelize = require("../db")
const {User} = require("./User")
const Post = sequelize.define("post",{
        id:{type:Sequelize.INTEGER,autoIncrement:true,allowNull:false,primaryKey:true},
        message:{type:Sequelize.STRING,allowNull:false}
    }
)
User.hasMany(Post)

module.exports = Post