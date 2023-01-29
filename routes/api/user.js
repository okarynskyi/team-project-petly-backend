const express = require('express');
const controller = require("../../controllers/userPets");
const { ctrlWrapper } = require("../../helpers");
const { autentication, isValidId } = require("../../middlewares");


const router = express.Router();

router.get('/pets', autentication, ctrlWrapper(controller.listPets));
router.post('/pets', autentication, ctrlWrapper(controller.addPet));
router.delete('/pets/:petId', autentication, isValidId, ctrlWrapper(controller.removePet));

module.exports = router;