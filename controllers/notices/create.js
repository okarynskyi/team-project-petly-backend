const { Notice } = require("../../models");
// const { HttpError } = require("../../helpers");
const { uploadImgToCloudinary } = require("../../services/cloudinary");

const create = async (req, res) => {
  const { _id } = req.user;
  // const { adopStatus, title } = req.body;

  // const notice = await Notice.findOne({ adopStatus, title, owner: _id });

  // if (notice) {
  //   throw HttpError(
  //     409,
  //     `Notise "${title}" already exist in "${adopStatus}" category`
  //   );
  // }

  const avatarURL = await uploadImgToCloudinary(req, 336, 336);

  const newNotice = await Notice.create({
    ...req.body,
    avatarURL,
    owner: _id,
  });

  res.status(201).json({ newNotice });
};

module.exports = create;
