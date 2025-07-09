const { NotFoundError } = require("../exceptions/baseError");
const userTaskHandler = require("../helper/userTaskHandler");
const TaskModel = require("../models/taskModel");
const User = require("../models/userModel");

class Task {
  async getTask(userId) {
    const { taskDoc } = await userTaskHandler(userId);
    return taskDoc;
  }
  async createTask(userId, data) {
    const { taskDoc, page } = await userTaskHandler(userId, data);

    if (!taskDoc.tasks.has(page)) {
      taskDoc.tasks.set(page, []);
    }

    const currentTasks = taskDoc.tasks.get(page) || [];
    currentTasks.push(data);
    taskDoc.tasks.set(page, currentTasks);

    await taskDoc.save();
    return data;
  }

  async updateTask(userId, data) {
    const { taskDoc, page, id } = await userTaskHandler(userId, data);

    const pageTask = taskDoc.tasks.get(page);
    if (!pageTask) throw new NotFoundError("page not found");

    console.log("pagetask", pageTask);

    const index = pageTask.findIndex((t) => t.id === id);
    if (index === -1) throw new NotFoundError("Invalid id, task not found");

    const currentTask = pageTask[index].toObject();

    console.log("currentTask", currentTask);
    
    pageTask[index] = {
      ...currentTask,
      ...data,
    };

    taskDoc.tasks.set(page, pageTask);
    await taskDoc.save();
    return pageTask[index];
  }

  async deleteTask(userId, data) {
    const { taskDoc, page, id } = await userTaskHandler(userId, data);

    const pageTask = taskDoc.tasks.get(page);

    if (!pageTask) throw new NotFoundError("page not found");

    const filtered = pageTask.filter((t) => t.id !== id);

    await taskDoc.tasks.set(page, filtered);

    await taskDoc.save();
    return filtered;
  }

  async completeTask(userId, data) {
    const newdata = { ...data, ...{ completed: true } };
    return await this.updateTask(userId, newdata);
  }
}

module.exports = new Task();
