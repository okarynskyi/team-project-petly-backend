const express = require('express');

const authCtrl = require("../../controllers/auth");
const { ctrlWrapper } = require("../../helpers");
const { validateBody, autentication, upload } = require("../../middlewares");
const { signupSchema, loginSchema, userUpdateSchema } = require("../../schemas");

const router = express.Router();

router.post('/signup', validateBody(signupSchema), ctrlWrapper(authCtrl.signup));

router.post('/login', validateBody(loginSchema), ctrlWrapper(authCtrl.login));

router.post('/logout', autentication, ctrlWrapper(authCtrl.logout));

router.get('/current', autentication, ctrlWrapper(authCtrl.getCurrentUser));
 
router.patch('/', autentication, upload.single('avatarURL'), validateBody(userUpdateSchema), ctrlWrapper(authCtrl.userUpdate));

module.exports = router;
