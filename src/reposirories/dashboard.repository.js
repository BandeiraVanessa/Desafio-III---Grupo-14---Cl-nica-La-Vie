import tables from '../database/models/index.js';

export const countNumeroPsicologos = async () => {
  return await tables.Psicologos.count();
};
export const countNumeroPacientes = async () => {
  return await tables.Pacientes.count();
};
export const countNumeroAtendimentos = async () => {
  return await tables.Atendimentos.count();
};
export const meanAtendimentosPsicologos = async () => {
  const psicologos = await countNumeroPsicologos();
  const atendimentos = await countNumeroAtendimentos();
  return atendimentos / psicologos;
};
