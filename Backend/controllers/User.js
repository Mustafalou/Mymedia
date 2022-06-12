const User = require("../models/User")

exports.ShowUsers = function(req,res){
    User.findAll()
    .then(data=>{
        res.json(data)
    })
    .catch(err => {
        res.status(500).json({ message: err.message })
    })
}
exports.AddUser = function(req,res){    
    let user = User.build({ username: req.body.username, password: req.body.password})
    user.save()
    .then(data=>{
        res.json(data)
    })
    .catch(err=>{
        res.status(500).json({ message: err.message })
    })
}
exports.FindUser = function (req,res){
    User.findOne({where:{username:req.body.username,password:req.body.password}})
    .then(data=>{
        if (data==null){
            res.status(404).json({message:"wrong username or password"})
        }else{
            res.status(200).json(data)
        } 
    })
    .catch(err=>{
        res.status(500).json({message:err.message})
    })
}
