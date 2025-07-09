const taskFelds = {
  id: { type: String, required: true },
  text: { type: String, required: true },
  date: String,
  time: String,
  completed: { type: Boolean, default: false },
  page: { type: String, required: true },
};

module.exports = taskFelds