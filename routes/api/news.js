const express = require("express");
const { ctrlWrapper } = require("../../helpers");
const { getNews } = require("../../controllers/news");

const router = express.Router();

router.get("/", ctrlWrapper(getNews));

module.exports = router;
