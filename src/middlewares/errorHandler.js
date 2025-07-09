const { ErrorResponse } = require("../util/baseResponse");

const errorHandler = (err, req, res, next) => {
  console.error(err.stack);
  return new ErrorResponse(
    res,
    err.status || 500,
    err.message || "Internal Server Error"
  ).send();
};

module.exports = errorHandler;