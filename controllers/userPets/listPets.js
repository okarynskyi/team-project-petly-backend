const { UserPet } = require("../../models");

const listPets = async (req, res, next) => {
  const { _id: owner } = req.user;
  const userPets = await UserPet.find({ owner })
    .sort({ createdAt: -1 });
    
  res.json({
    userPets,
  });
};

module.exports = listPets;