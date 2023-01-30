const { Notice } = require("../../models");
const { HttpError } = require("../../helpers");
const { uploadImgToCloudinary } = require("../../services/cloudinary");

const create = async (req, res) => {
  const { _id, email, phone } = req.user;
  const { name, adopStatus } = req.body;

  const notice = await Notice.findOne({ adopStatus, name, "owner._id": _id });

  if (notice) {
    throw HttpError(409, `Notise "${adopStatus}" already exist for ${name}`);
  }

  const avatarURL = await uploadImgToCloudinary(req);

  const owner = { _id, email, phone };

  const newNotice = await Notice.create({
    ...req.body,
    avatarURL,
    owner,
  });

  res.status(201).json({ newNotice });
};

module.exports = create;
