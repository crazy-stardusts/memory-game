export function errorHandler(err, req, res, next) {
  console.error(err); // Consider using a logging library in production

  const statusCode = err.status || (res.statusCode && res.statusCode >= 300 ? res.statusCode : 500);

  res.status(statusCode).json({
    success: false,
    message: err.message || 'Internal Server Error',
    ...(process.env.NODE_ENV === 'development' && {
      stack: err.stack,
    }),
  });
}

export const asyncHandler = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};

export class BadRequestError extends Error {
  constructor(message) {
    super(message);
    this.status = 400;
  }
}


