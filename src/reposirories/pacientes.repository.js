import tables from '../database/models/index.js';

/**
 * Busca por todos os pacientes
 * no banco de dados.
 * @returns Retorna uma lista de pacientes
 * ou um array vazio
 */
export const findAllPacientes = async () => {
  return await tables.Pacientes.findAll();
};

/**
 * Busca um paciente por id
 * @param {number} id
 * @param {boolean} includePassword Opcional, true para incluir senha
 * @returns Retorna um paciente, caso exista
 */
export const findPacienteById = async (id) => {
  return await tables.Pacientes.findOne({ where: { id } });
};

/**
 * Busca um paciente por email
 * @param {string} email
 * @param {boolean} includePassword Opcional, true para incluir senha
 * @returns Retorna um paciente, caso exista
 */
export const findPacienteByEmail = async (email) => {
  return await tables.Pacientes.findOne({ where: { email } });
};

/**
 * Cria um novo registro de paciente no banco de dados
 * @param {string} nome
 * @param {string} email
 * @param {string} idade
 * @returns Retorna Paciente criado
 */
export const createPaciente = async (nome, email, idade) => {
  if (await findPacienteByEmail(email)) {
    const erro = new Error('Email já esta em uso');
    erro.statusCode = 400;
    throw erro;
  }
  const paciente = await tables.Pacientes.create({
    nome,
    email,
    idade,
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
export const updatePaciente = async (id, nome, email, idade) => {
  const paciente = await findPacienteByEmail(email);
  if (paciente && paciente.id != id) {
    const erro = new Error('Email já esta em uso');
    erro.statusCode = 400;
    throw erro;
  }
  await tables.Pacientes.update({ nome, email, idade }, { where: { id } });
  return await findPacienteById(id);
};

/**
 * Exclui um registro de um paciente no banco de dados
 * @param {number} id
 */
export const deletePaciente = async (id) => {
  await tables.Atendimentos.destroy({ where: { paciente_id: id } });
  return await tables.Pacientes.destroy({ where: { id } });
};
