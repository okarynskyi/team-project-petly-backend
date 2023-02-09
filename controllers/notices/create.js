const { Notice } = require("../../models");
const { uploadImgToCloudinary } = require("../../services/cloudinary");

const create = async (req, res) => {
  const { _id } = req.user;

  const avatarURL = await uploadImgToCloudinary(req, 336, 336);
  const newNotice = await Notice.create({
    ...req.body,
    avatarURL,
    owner: _id,
  });

  res.status(201).json({ newNotice });
};

module.exports = create;
