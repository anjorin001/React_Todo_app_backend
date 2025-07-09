const { ConflictError, UnauthorizedError } = require("../exceptions/baseError");
const { hashPassword, comparePassword } = require("../helper/passwordChecker");
const generateToken = require("../helper/tokenGenerator");
const TaskModel = require("../models/taskModel");
const User = require("../models/userModel");

class userService {
  async signup(data) {
    const { username, email, password } = data;
    const foundUser = await User.findOne({ email });

    if (foundUser) throw new ConflictError("user already exist");

    const hashedPassword = await hashPassword(password);

    const taskDoc = await TaskModel.create({});

    const newUser = await User.create({
      username,
      email,
      password: hashedPassword,
      task: taskDoc._id,
    });

    const token = await generateToken(newUser);
    return token;
  }

  async login(data) {
    const { password, email } = data;
    const foundUser = await User.findOne({ email });

    if (!foundUser) throw new UnauthorizedError("Invalid credidential");

    const verifyPassword = await comparePassword(password, foundUser);

    if (!verifyPassword) throw new UnauthorizedError("Invalid credidential");

    const token = await generateToken(foundUser);
    return token;
  }
}

module.exports = new userService();
