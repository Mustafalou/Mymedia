const User = require("../models/User")

exports.ShowUsers = function(req,res){    
    User.findAll()
        .then(data=>{
            res.json(data)
        })
        .catch(err => {
            res.status(500).json({ message: err.message })
        }
    )
}
