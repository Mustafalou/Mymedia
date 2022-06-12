const User = require("../models/User")

exports.ShowUsers = function(req,res){
    if (!req.body.username && !req.body.password){
        User.findAll()
        .then(data=>{
            res.json(data)
        })
        .catch(err => {
            res.status(500).json({ message: err.message })
        })
    }else{
        User.findOne({where:{username:req.body.username,password:req.body.password}})
        .then(data=>{
            res.status(200).json(data)
        })
        .catch(err=>{
            res.status(500).json({message:"wrong username or password"})
        })
    }
}
exports.AddUser = function(req,res){    
    let user = User.build({ username: req.body.username, password: req.body.password})
    user.save()
        .then(data=>{
            res.json(data)
        })
        .catch(err=>{
            res.status(500).json({ message: err.message })
        }
    )
}
