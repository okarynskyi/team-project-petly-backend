const express = require("express");

const noticesCtrl = require("../../controllers/notices");
const { ctrlWrapper } = require("../../helpers");
const {
  validateBody,
  isValidNoticeId,
  autentication,
  upload,
  isValidCategory,
} = require("../../middlewares");
const { noticeSchema } = require("../../schemas");

const router = express.Router();

router.get(
  "/category/:category",
  isValidCategory,
  ctrlWrapper(noticesCtrl.getByCategory)
);
// створити ендпоінт для отримання одного оголошення
router.get(
  "/:noticeId",
  isValidNoticeId,
  ctrlWrapper(noticesCtrl.getById));

router.post(
  "/favorites/:noticeId",
  isValidNoticeId,
  autentication,
  ctrlWrapper(noticesCtrl.addToFavorite)
);
// створити ендпоінт для отримання оголошень авторизованого користувача доданих ним же в обрані

router.get(
  "/user/favorites",
  autentication,
  ctrlWrapper(noticesCtrl.getUserFavorites));
// створити ендпоінт для видалення оголошення авторизованого користувача доданих цим же до обраних

router.delete(
  "/favorites/:noticeId",
  isValidNoticeId,
  autentication,
  ctrlWrapper(noticesCtrl.removeFromFavorite)
);

// створити ендпоінт для видалення оголошення авторизованого користувача створеного цим же користувачем
router.delete(
  "/:noticeId",
  isValidNoticeId,
  autentication,
  ctrlWrapper(noticesCtrl.removeUserNotice)
);

router.post(
  "/",
  autentication,
  upload.single("imageURL"),
  validateBody(noticeSchema),
  ctrlWrapper(noticesCtrl.create)
);
// створити ендпоінт для отримання оголошень авторизованого кристувача створених цим же користувачем
router.get("/",
  autentication,
  ctrlWrapper(noticesCtrl.getUsersNotices)
);
// створити ендпоінт для видалення оголошення авторизованого користувача створеного цим же користувачем
router.delete(
  "/:noticeId",
  isValidNoticeId,
  autentication,
  ctrlWrapper(noticesCtrl.removeUserNotice)
);

router.get(
  "/",
  autentication,
  ctrlWrapper(noticesCtrl.getUsersNotices)
);

// створити ендпоінт для пошуку оголошення по ключовому слову в заголовку
// router.get(
//   "/category",
//   ctrlWrapper(noticesCtrl.getNoticesByQuery));

module.exports = router;
