const express = require('express')

const ctrl = require("../../controllers/auth")
const { ctrlWrapper } = require("../../helpers")
const { validateBody, autentication } = require("../../middlewares")
const { signupSchema, loginSchema, userUpdateSchema } = require("../../schemas")

const router = express.Router()

router.post('/signup', validateBody(signupSchema), ctrlWrapper(ctrl.signup)) 

router.post('/login', validateBody(loginSchema), ctrlWrapper(ctrl.login)) 

router.post('/logout', autentication, ctrlWrapper(ctrl.logout)) 

router.get('/current', autentication, ctrlWrapper(ctrl.getCurrentUser))  
 
router.patch('/', autentication, validateBody(userUpdateSchema), ctrlWrapper(ctrl.userUpdate)) 

module.exports = router
