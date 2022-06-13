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
exports.ShowUserbyID = function(req,res){
    User.findOne({where:{id:req.params.id}})
    .then(data=>{
        res.status(200).json(data)
    })
    .catch(err=>{
        res.status(500).json({err:err.message})
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
exports.getFriends = function (req,res){
    const id = req.params.id
    User.findOne({where:{id:id},include:"friends"})
    .then(data=>{
        if (data==null){
            res.status(404).json({message:"wrong username or password"})
        }else{
            res.status(200).json(data.friends)
        } 
    })
    .catch(err=>{
        res.status(500).json({message:err.message})
    })
}
exports.addFriends = async function (req,res){
    const id = req.params.id
    let user = await User.findOne({where:{id:id}}) 
    let friend = await User.findOne({where:{username:req.body.username}}) 
    user.addFriends(friend)
    .then(data=>{
        friend.addFriends(user)
        .then(data2=>{
            res.status(200).json(data+data2)
        })
        .catch(err=>{
        res.status(500).json({err:err.message})
    })
    })
    .catch(err=>{
        res.status(500).json({err:err.message})
    })
}
