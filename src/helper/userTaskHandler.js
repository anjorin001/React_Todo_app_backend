const User = require("../models/userModel");

module.exports = async (userId, data = null) => {
  const user = await User.findById(userId).populate("task");

  if (!user) throw new Error("User not found");
  if (!user.task) throw new Error("User has no task document");

  const taskDoc = user.task;
  if (!taskDoc) {
    taskDoc = await TaskModel.create({});
    user.task = taskDoc._id;
    await user.save();
  }
  const { page, id = null } = data || {};

  return {
    taskDoc,
    page,
    id,
  };
};
