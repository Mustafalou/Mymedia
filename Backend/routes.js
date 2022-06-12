let express = require('express')
let router = express.Router()
var UserController = require('./controllers/User')
router.get('/users',UserController.ShowUsers)
router.post('/user',UserController.FindUser)
router.post('/users',UserController.AddUser)
module.exports = router