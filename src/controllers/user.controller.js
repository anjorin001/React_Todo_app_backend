const UserService = require("../service/userService");
const { SuccessResponse } = require("../util/baseResponse");

const current_user = async (req, res, next) => {
  try {
    const user = await UserService.getCurrentUser({ userId: req.user.userId});
    return new SuccessResponse(
      res,
      200,
      "user fetched successfully",
      user
    ).send();
  } catch (err) {
    next(err);
  }
};

module.exports = current_user;
