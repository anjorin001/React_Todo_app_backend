const express = require("express");
const current_user = require("../controllers/user.controller");
const authenticationMiddleware = require("../middlewares/authMiddeware");
const router = express.Router();

router.use(authenticationMiddleware);

router.get("/current-user", current_user);

module.exports = router;
