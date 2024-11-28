const express = require("express");
const { userCreate } = require("../controller/controller");
const upload = require("../middleware/upload");
const { registerValidation } = require("../validation/validation");
const { protect } = require("../auth/auth");

const route = express.Router();

route.post(
  "/post",
  protect,
  registerValidation,
  upload.fields([{ name: "photo", maxCount: 3 }]),
  userCreate
);

module.exports = route;
