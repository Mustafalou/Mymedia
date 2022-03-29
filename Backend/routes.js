let express = require('express')
let router = express.Router()
// Import contact controller
var UserController = require('./Controllers/User')
router.get('/users',UserController.ShowUsers)
module.exports = router