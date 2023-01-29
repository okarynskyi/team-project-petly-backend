const express = require("express");
const { ctrlWrapper } = require("../../helpers");
const { getFriends } = require("../../controllers/friends");

const router = express.Router();

router.get("/", ctrlWrapper(getFriends));

module.exports = router;
