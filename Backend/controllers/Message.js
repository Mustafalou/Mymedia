const Message = require("../models/Message")
const {User,Friend} = require("../models/User")

exports.getMessages = async function(req,res){
    let friend = await Friend.findOne({where:{id:req.params.id}})
    if(!friend){
        res.status(500).json({err:"friend not found"})
    }
    else{
        friend.getMessages()
        .then(data=>{
            res.status(200).json(data)
        })
        .catch(err=>{
            res.status(500).json({err:err.message})
        })
    }
}
exports.addMessage = async function(req,res){
    let friend = await Friend.findOne({where:{id:req.params.id}})
    let message = await Message.create({message:req.body.message})
    
    if(!friend){
        res.status(500).json({err:"friend not found"})
    }
    else{
        friend.addMessages(message)
        .then(data=>{
            res.status(200).json(data)
        })
        .catch(err=>{
            res.status(500).json({err:err.message})
        })
    }
}