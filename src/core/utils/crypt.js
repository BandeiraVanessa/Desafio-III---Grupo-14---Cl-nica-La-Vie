import { pbkdf2Sync, randomBytes } from 'node:crypto';

const saltSite = 16;
const iterations = 1000;
const keylen = 64;
const digest = 'sha512';

/**
 *
 * @param {string} password senha
 * @returns hash: senha criptografada
 */
export const hashPassword = (password) => {
  const salt = randomBytes(saltSite).toString('hex');
  const hash = pbkdf2Sync(password, salt, iterations, keylen, digest).toString(
    'hex'
  );
  return `${salt}:${hash}`;
};

/**
 *
 * @param {string} password senha enviada pelo usuario
 * @param {string} storedHash senha criptografada armazenada no banco de dados
 * @returns (true) caso a senha seja valida, (false) caso invalida
 */
export const isPasswordValid = (password, storedHash) => {
  const [salt, hash] = storedHash.split(':');
  return (
    hash ===
    pbkdf2Sync(password, salt, iterations, keylen, digest).toString('hex')
  );
};
