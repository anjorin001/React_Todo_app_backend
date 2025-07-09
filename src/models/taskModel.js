const mongoose = require("mongoose");

const taskItemSchema = new mongoose.Schema(
  {
    id: { type: String, required: true, unique: true },
    text: { type: String, required: true },
    date: { type: String, default: null },
    time: { type: String, default: null },
    completed: { type: Boolean, default: false },
    page: { type: String, required: true },
  },
  { _id: false }
);

const mapOfArraySchema = {
  type: Map,
  of: {
    type: [taskItemSchema],
    default: [],
  },
  default: () => ({}),
};

const taskSchema = new mongoose.Schema({
  tasks: mapOfArraySchema,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const TaskModel = mongoose.model("task", taskSchema);
module.exports = TaskModel;
