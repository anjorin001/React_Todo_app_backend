const express = require("express");
const authenticationMiddleware = require("../middlewares/authMiddeware");
const {
  createTask,
  deleteTask,
  updateTask,
  completeTask,
  getTask,
} = require("../controllers/task.controller");
const { createTaskValidator, deleteTaskValidator, updateTaskValidator, completedTaskValidator } = require("../validators/taskValidators");
const validate = require("../middlewares/requestValidator");
const router = express.Router();

router.use(authenticationMiddleware);

router.get("/", getTask)
router.post("/create-task",validate(createTaskValidator) ,createTask);
router.delete("/delete-task/:id", validate(deleteTaskValidator) ,deleteTask);
router.patch("/update-task/:id",validate(updateTaskValidator) , updateTask);
router.patch("/complete-task/:id", validate(completedTaskValidator) ,completeTask);

module.exports = router;
