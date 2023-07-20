const router = require('express').Router()

const UserController = require('../controllers/UserController')

// middleware
const verifytoken = require('../helpers/verify-token')
const { imageUpload } = require('../helpers/image-upload') ;

router.post('/register', verifytoken, UserController.register)
router.post('/login', UserController.login)
router.get('/checkuser', verifytoken, UserController.checkUser)
router.get('/profile/:id', verifytoken, UserController.listProfile)
router.patch('/edit/:id', verifytoken, imageUpload.single("image"), UserController.editUser)

module.exports = router