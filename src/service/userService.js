const { NotFoundError } = require("../exceptions/baseError");
const User = require("../models/userModel");

class UserService {
  async getCurrentUser({ userId }) {
    const user = await User.findById(userId).select(
      "-password -createdAt -task -__v"
    );

    if (!user) throw new NotFoundError("user not found");

    return user;
  }
}

module.exports = new UserService();
