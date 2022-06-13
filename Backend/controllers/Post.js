const Post = require("../models/Post")
const User = require("../models/User")
exports.addPost = async function(req,res){
    const id= req.params.id
    let post = await Post.create({ message: req.body.message})
    User.findOne({where:{id:id},include:Post})
    .then(user=>{
        user.addPost(post)
        .then(data=>{
            res.status(200).json(post)
        })
        .catch(err => {
            post.destroy()
            res.status(500).json({ message: err.message })
        })
    })
    .catch(err=>{
        post.destroy()
        res.status(500).json({err:err.message})
    })  
}
exports.getPosts = function(req,res){
    const id = req.params.id
    User.findOne({where:{id:id},include:Post})
    .then(data=>{
        res.status(200).json(data.posts)
    })
    .catch(err=>{
        res.status(500).json({err:err.message})
    })
}