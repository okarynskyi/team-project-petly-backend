const express = require('express');
const userCtrl = require("../../controllers/user");
const petCtrl = require("../../controllers/userPets");
const { ctrlWrapper } = require("../../helpers");
const { autentication, isValidId } = require("../../middlewares");


const router = express.Router();

router.get("/", autentication, ctrlWrapper(userCtrl.getUserData));

router.get('/pets', autentication, ctrlWrapper(petCtrl.listPets));

router.post('/pets', autentication, ctrlWrapper(petCtrl.addPet));

router.delete('/pets/:petId', autentication, isValidId, ctrlWrapper(petCtrl.removePet));


module.exports = router;