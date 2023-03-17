import tables from '../database/models/index.js';

export const findAllAtendimentos = async () => {
  return await tables.Atendimentos.findAll();
};
export const findAtendimento = async (id) => {
  return await tables.Atendimentos.findOne({ where: { id } });
};
export const createAtendimento = async (
  psicologo_id,
  paciente_id,
  data_atendimento,
  observacao
) => {
  return await tables.Atendimentos.create({
    psicologo_id,
    paciente_id,
    data_atendimento,
    observacao,
  });
};