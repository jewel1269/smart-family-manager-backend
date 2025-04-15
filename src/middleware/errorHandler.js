// Error handling middleware
const errorHandler = (err, req, res, next) => {
  // Default error type
  let errorType = "Internal Server Error";
  let statusCode = 500;

  // Handle specific errors
  if (err.name === "ValidationError") {
    errorType = "Validation Error";
    statusCode = 400;
  } else if (err.name === "CastError") {
    errorType = "Cast Error";
    statusCode = 400;
  } else if (err.code === 11000) {
    errorType = "Duplicate Entry";
    statusCode = 400;
  }

  // Prepare error response
  const errorResponse = {
    success: false,
    message: errorType,
    errorMessage: [err.message],
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  };

  // Send the error response
  res.status(statusCode).json(errorResponse);
};

export default errorHandler;
