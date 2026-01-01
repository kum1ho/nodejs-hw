export const errorHandler = (error, req, res, next) => {
  console.error('Error:', error);
  res.status(500).json({
    message: error.message || 'Internal server error',
  });
};