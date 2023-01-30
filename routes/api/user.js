const express = require('express');
const userCtrl = require("../../controllers/user");
const petCtrl = require("../../controllers/userPets");
const { ctrlWrapper } = require("../../helpers");
const { autentication, isValidPetId, validateBody, upload } = require("../../middlewares");
const { userPetSchema } = require("../../schemas");


const router = express.Router();

router.get("/", autentication, ctrlWrapper(userCtrl.getUserData));

router.get('/pets', autentication, ctrlWrapper(petCtrl.listPets));

router.post('/pets', autentication, upload.single("petsPhotoURL"), validateBody(userPetSchema), ctrlWrapper(petCtrl.addPet));

router.delete('/pets/:petId', autentication, isValidPetId, ctrlWrapper(petCtrl.removePet));


module.exports = router;