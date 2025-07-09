const taskService = require("../service/taskService");
const { SuccessResponse } = require("../util/baseResponse");

const createTask = async (req, res, next) => {
  try {
    console.log("req", req.validated);
    const result = await taskService.createTask(req.user.userId, req.validated);
    return new SuccessResponse(
      res,
      201,
      "Task created successfully",
      result
    ).send();
  } catch (err) {
    next(err);
  }
};

const updateTask = async (req, res, next) => {
  try {
    const result = await taskService.updateTask(req.user.userId, req.validated);
    return new SuccessResponse(
      res,
      200,
      "Task updated successfully",
      result
    ).send();
  } catch (err) {
    next(err);
  }
};

const deleteTask = async (req, res, next) => {
  try {
    console.log(req.validated);
    const result = await taskService.deleteTask(req.user.userId, req.validated);
    return new SuccessResponse(
      res,
      200,
      "Task deleted successfully",
      result
    ).send();
  } catch (err) {
    next(err);
  }
};

const completeTask = async (req, res, next) => {
  try {
    const result = await taskService.completeTask(
      req.user.userId,
      req.validated
    );
    return new SuccessResponse(
      res,
      200,
      "Task created successfully",
      result
    ).send();
  } catch (err) {
    next(err);
  }
};

const getTask = async (req, res, next) => {
  try {
    const result = await taskService.getTask(req.user.userId, req.validated);
    return new SuccessResponse(
      res,
      200,
      "Task fetched successfully",
      result
    ).send();
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getTask,
  updateTask,
  deleteTask,
  createTask,
  completeTask,
};
