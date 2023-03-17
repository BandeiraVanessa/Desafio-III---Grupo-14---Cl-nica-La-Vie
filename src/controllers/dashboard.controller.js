import {
  countNumeroPsicologos,
  countNumeroPacientes,
  countNumeroAtendimentos,
  meanAtendimentosPsicologos,
} from '../reposirories/dashboard.repository.js';

export const getNumeroPsicologos = async (req, res, next) => {
  try {
    const count = await countNumeroPsicologos();
    return res.status(200).json({ numero_psicologos: count });
  } catch (error) {
    next(error);
  }
};
export const getNumeroPacientes = async (req, res, next) => {
  try {
    const count = await countNumeroPacientes();
    return res.status(200).json({ numero_paciente: count });
  } catch (error) {
    next(error);
  }
};
export const getNumeroAtendimentos = async (req, res, next) => {
  try {
    const count = await countNumeroAtendimentos();
    return res.status(200).json({ numero_atendimentos: count });
  } catch (error) {
    next(error);
  }
};
export const getMeanAtendimentosPsicologos = async (req, res, next) => {
  try {
    const media = await meanAtendimentosPsicologos();
    return res.status(200).json({ media });
  } catch (error) {
    next(error);
  }
};
