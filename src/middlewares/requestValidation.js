import {
  fieldMustBeType,
  requiredField,
} from '../errors/standardErrorResponses.js';

export const validateLogin = (req, res, next) => {
  try {
    if (!req.body.email) {
      return res.status(400).json({ message: requiredField('email') });
    }
    if (!req.body.senha) {
      return res.status(400).json({ message: requiredField('senha') });
    }
    if (typeof req.body.email !== 'string') {
      return res
        .status(400)
        .json({ message: fieldMustBeType('email', 'string') });
    }
    if (typeof req.body.senha !== 'string') {
      return res
        .status(400)
        .json({ message: fieldMustBeType('senha', 'string') });
    }
    next();
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};
