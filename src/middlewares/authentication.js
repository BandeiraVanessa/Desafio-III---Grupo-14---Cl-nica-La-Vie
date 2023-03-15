import { verifyJwt } from '../core/utils/jwt.js';

export const auth = (req, res, next) => {
  try {
    const { authorization } = req.headers;
    verifyJwt(authorization);
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Token invalido' });
  }
};
