import { notFound } from '../errors/standardErrorResponses.js';
import {
  createAtendimento,
  findAllAtendimentos,
  findAtendimento,
} from '../reposirories/atendimento.repository.js';
import { verifyJwt } from '../core/utils/jwt.js';
import { findPacienteById } from '../reposirories/pacientes.repository.js';
import { findPsicologoById } from '../reposirories/psicologos.repository.js';

export const getAtendimentos = async (req, res, next) => {
  try {
    const atendimentos = await findAllAtendimentos();
    return res.status(200).json(atendimentos);
  } catch (error) {
    next(error);
  }
};
export const getAtendimento = async (req, res, next) => {
  try {
    const { id } = req.params;
    const atendimento = await findAtendimento(id);
    if (!atendimento) {
      return res.status(404).json(notFound);
    }
    return res.status(200).json(atendimento);
  } catch (error) {
    next(error);
  }
};
export const postAtendimento = async (req, res, next) => {
  try {
    const { authorization } = req.headers;
    const { id } = verifyJwt(authorization);
    const { paciente_id, data_atendimento, observacao } = req.body;
    const pacienteExiste = await findPacienteById(paciente_id);
    if (!pacienteExiste) {
      const error = new Error('id de paciente fornecida não encontrada');
      error.statusCode = 404;
      throw error;
    }
    const PsicologoExiste = await findPsicologoById(id);
    if (!PsicologoExiste) {
      const error = new Error('Cadastro de psicologo não encontrado');
      error.statusCode = 404;
      throw error;
    }
    const atendimento = await createAtendimento(
      id,
      paciente_id,
      data_atendimento,
      observacao
    );
    return res.status(201).json(atendimento);
  } catch (error) {
    next(error);
  }
};
