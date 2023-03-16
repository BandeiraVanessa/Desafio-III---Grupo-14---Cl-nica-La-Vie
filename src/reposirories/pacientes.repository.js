import { hashPassword } from '../core/utils/crypt.js';
import tables from '../database/models/index.js';

/**
 * Busca por todos os pacientes
 * no banco de dados.
 * @returns Retorna uma lista de pacientes
 * ou um array vazio
 */
export const findAllPacientes = async () => {
  return await tables.Pacientes.findAll({
  });
};

/**
 * Busca um paciente por id
 * @param {number} id
 * @param {boolean} includePassword Opcional, true para incluir senha
 * @returns Retorna um paciente, caso exista
 */
export const findPacienteById = async (id, includePassword = false) => {
  return await tables.Pacientes.findOne({
    where: { id },
    attributes: includePassword ? {} : { exclude: ['senha'] },
  });
};

/**
 * Busca um paciente por email
 * @param {string} email
 * @param {boolean} includePassword Opcional, true para incluir senha
 * @returns Retorna um paciente, caso exista
 */
export const findPacienteByEmail = async (email, includePassword = false) => {
  return await tables.Pacientes.findOne({
    where: { email },
    attributes: includePassword ? {} : { exclude: ['senha'] },
  });
};

/**
 * Cria um novo registro de paciente no banco de dados
 * @param {string} nome
 * @param {string} email
 * @param {string} senha
 * @param {string} apresentacao
 * @returns Retorna Paciente criado
 */
export const createPaciente = async (nome, email, senha, apresentacao) => {
  senha = hashPassword(senha);
  const paciente = await tables.Pacientes.create({
    nome,
    email,
    senha,
    apresentacao,
  });
  return await findPacienteById(paciente.id);
};

/**
 * Atualiza o registro de um paciente no banco de dados
 * @param {number} id
 * @param {string} nome
 * @param {string} email
 * @param {string} senha
 * @param {string} apresentacao
 * @returns retorna paciente atualizado
 */
export const updatePaciente = async (id, nome, email, senha, apresentacao) => {
  senha ? (senha = hashPassword(senha)) : (senha = undefined);
  await tables.Pacientes.update(
    { nome, email, senha, apresentacao },
    { where: { id } }
  );
  return await findPacienteById(id);
};

/**
 * Exclui um registro de um paciente no banco de dados
 * @param {number} id
 */
export const deletePaciente = async (id) => {
  await tables.Pacientes.destroy({ where: { id } });
};
