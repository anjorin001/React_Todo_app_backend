const userAuthService = require("../service/userAuthService");
const { SuccessResponse } = require("../util/baseResponse");

const userSignup = async (req, res, next) => {
  try {
    const token = await userAuthService.signup(req.validated)
    return new SuccessResponse(res, 201, "User registered successfully", {
      token,
    }).send();
  } catch (err) {
    next(err);
  }
};

const userLogin = async (req, res, next) => {
  try {
    const token = await userAuthService.login(req.validated)
    return new SuccessResponse(res, 200, "User login successful", {
      token,
    }).send();
  } catch (err) {
    next(err);
  }
};

module.exports = {
  userSignup,
  userLogin,
};
