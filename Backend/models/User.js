var Sequelize = require("sequelize")
var sequelize = require("../db")
const User = sequelize.define("user",{
        id:{type:Sequelize.INTEGER,autoIncrement:true,allowNull:false,primaryKey:true},
        username:{type:Sequelize.STRING,allowNull:false,unique:true},
        password:{type:Sequelize.STRING,allowNull:false},
    }
)
const Friend = sequelize.define("friend",{
    id:{type:Sequelize.INTEGER,autoIncrement:true,allowNull:false,primaryKey:true},
})
User.belongsToMany(User,{through:"friend", as:"friends",foreignKey:"user_id"})
User.belongsToMany(User,{through:"friend", as:"userfriends",foreignKey:"friend_id",})
module.exports ={
    User, 
    Friend
} 