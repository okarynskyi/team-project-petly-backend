const addToFavorite = require("./addToFavorite");
const removeFromFavorite = require("./removeFromFavorite");
const create = require("./create");
const getByCategory = require("./getByCategory");
const getById = require("./getById");
const getUsersNotices = require("./getUsersNotices");
const removeUserNotice = require("./removeUserNotice");
const getUserFavorites = require('./getUserFavorites');



module.exports = {
  addToFavorite,
  removeFromFavorite,
  create,
  getByCategory,
  getById,
  getUsersNotices,
  removeUserNotice,
  getUserFavorites,
};
