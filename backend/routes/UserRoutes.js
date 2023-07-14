const router = require('express').Router()

const UserController = require('../controllers/UserController')

// middleware
const verifytoken = require('../helpers/verify-token')

router.post('/register', UserController.register)
router.post('/login', UserController.login)
router.get('/checkuser', UserController.checkUser)
router.get('/profile/:id', UserController.listProfile)
router.patch('/edit/:id', UserController.editUser)

module.exports = router