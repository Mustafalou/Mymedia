let express = require('express')
let router = express.Router()
var UserController = require('./controllers/User')
var PostController = require('./controllers/Post')

router.get('/users',UserController.ShowUsers)
router.get('/users/:id',UserController.ShowUserbyID)
router.get('/friends/:id',UserController.getFriends)
router.post('/friends/:id',UserController.addFriends)
router.post('/user',UserController.FindUser)
router.post('/users',UserController.AddUser)

router.post('/posts/:id',PostController.addPost)
router.get('/posts/:id',PostController.getPosts)
module.exports = router