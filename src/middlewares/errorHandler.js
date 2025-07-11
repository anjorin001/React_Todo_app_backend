const { ErrorResponse } = require("../util/baseResponse");

const errorHandler = (err, req, res, next) => {
  console.error(err.stack);
  const status = err.isOperational
    ? err.statusCode || err.status || 500
    : 500;

  const message = err.isOperational
    ? err.message
    : "Internal Server Error";

  return new ErrorResponse(res, status, message).send();
};


module.exports = errorHandler;
