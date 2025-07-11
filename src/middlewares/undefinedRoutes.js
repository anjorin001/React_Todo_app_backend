const undefinedRoute = (req, res, next) => {
  const error = new Error("Route not found");
  error.status = 404;
  next(error);
};

module.exports = undefinedRoute