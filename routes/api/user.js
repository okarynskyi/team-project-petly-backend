const express = require('express');
const controller = require("../../controllers/userPets");
const { ctrlWrapper } = require("../../helpers");
const { autentication, isValidId } = require("../../middlewares");


const router = express.Router();

router.get('/', autentication, ctrlWrapper(controller.listPets));
router.post('/', autentication, ctrlWrapper(controller.addPet));
router.delete('/:petId', autentication, isValidId, ctrlWrapper(controller.removePet));

module.exports = router;