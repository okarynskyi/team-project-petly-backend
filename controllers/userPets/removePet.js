const { UserPet } = require("../../models");
const { HttpError } = require('../../helpers');

const removePet = async (req, res) => {
  const { _id: owner } = req.user;    
  const { petId } = req.params;
    
  const result = await UserPet.findOneAndRemove({ _id: petId, owner });
  
  if (!result) {
    throw HttpError(404, "No pets found");
  }
  
  res.status(200).json({ message: "Pet deleted" });
}

module.exports = removePet;