export const errorHandler = (error, req, res, next) => {
  console.error(error);
  if (error.statusCode) {
    return res.status(error.statusCode).json(error.message);
  }
  return res.status(500).json({ message: 'Internal Server Error' });
};
