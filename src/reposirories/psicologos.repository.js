import { hashPassword } from '../core/utils/crypt.js';
import tables from '../database/models/index.js';

/**
 * Busca por todos os psicologos
 * no banco de dados.
 * @returns Retorna uma lista de psicologos
 * ou um array vazio
 */
export const findAllPsicologos = async () => {
  return await tables.Psicologos.findAll({
    attributes: { exclude: ['senha'] },
  });
};

/**
 * Busca um psicologo por id
 * @param {number} id
 * @param {boolean} includePassword Opcional, true para incluir senha
 * @returns Retorna um psicologo, caso exista
 */
export const findPsicologoById = async (id, includePassword = false) => {
  return await tables.Psicologos.findOne({
    where: { id },
    attributes: includePassword ? {} : { exclude: ['senha'] },
  });
};

/**
 * Busca um psicologo por email
 * @param {string} email
 * @param {boolean} includePassword Opcional, true para incluir senha
 * @returns Retorna um psicologo, caso exista
 */
export const findPsicologoByEmail = async (email, includePassword = false) => {
  return await tables.Psicologos.findOne({
    where: { email },
    attributes: includePassword ? {} : { exclude: ['senha'] },
  });
};

/**
 * Cria um novo registro de psicologo no banco de dados
 * @param {string} nome
 * @param {string} email
 * @param {string} senha
 * @param {string} apresentacao
 * @returns Retorna Psicologo criado
 */
export const createPsicologo = async (nome, email, senha, apresentacao) => {
  if (await findPsicologoByEmail(email)) {
    const erro = new Error('Email já esta em uso');
    erro.statusCode = 400;
    throw erro;
  }
  senha = hashPassword(senha);
  const psicologo = await tables.Psicologos.create({
    nome,
    email,
    senha,
    apresentacao,
  });
  return await findPsicologoById(psicologo.id);
};

/**
 * Atualiza o registro de um psicologo no banco de dados
 * @param {number} id
 * @param {string} nome
 * @param {string} email
 * @param {string} senha
 * @param {string} apresentacao
 * @returns retorna psicologo atualizado
 */
export const updatePsicologo = async (id, nome, email, senha, apresentacao) => {
  senha ? (senha = hashPassword(senha)) : (senha = undefined);
  await tables.Psicologos.update(
    { nome, email, senha, apresentacao },
    { where: { id } }
  );
  return await findPsicologoById(id);
};

/**
 * Exclui um registro de um psicologo no banco de dados
 * @param {number} id
 */
export const deletePsicologo = async (id) => {
  return await tables.Psicologos.destroy({ where: { id } });
};
