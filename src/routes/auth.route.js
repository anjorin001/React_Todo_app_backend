const express = require("express");
const {
  signupValidator,
  loginValidator,
} = require("../validators/authValidators");
const { userLogin, userSignup } = require("../controllers/auth.controller");
const validate = require("../middlewares/requestValidator");
const router = express.Router();

router.post("/signup", validate(signupValidator) , userSignup );
router.post("/login", validate(loginValidator), userLogin);

module.exports = router;
