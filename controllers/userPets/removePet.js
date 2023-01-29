const { UserPet } = require("../../models")
const { HttpError } = require('../../helpers')

const removePet = async (req, res) => {
    const { _id: owner } = req.user;
    console.log(owner)
    const { petId } = req.params;
    console.log(petId)
    const result = await UserPet.findOneAndRemove({ _id: petId, owner })
  
  if (!result) {
    throw HttpError(404);
  }
  
  res.status(200).json({ message: "Pet deleted" })
}

module.exports = removePet;