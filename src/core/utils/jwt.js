import jwt from 'jsonwebtoken';
import { SECRET } from '../../envConfig.js';

export const signJwt = (payload) => {
  return jwt.sign(payload, SECRET, { expiresIn: '1h' });
};
