const { UserPet } = require("../../models")

const listPets = async (req, res, next) => {
  const { _id: owner } = req.user;
  const result = await UserPet.find({owner});
    
  res.json(result);
};

module.exports = listPets;