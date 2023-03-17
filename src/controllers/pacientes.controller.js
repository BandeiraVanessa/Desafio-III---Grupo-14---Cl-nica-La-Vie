import { notFound } from '../errors/standardErrorResponses.js';
import {
  createPaciente,
  deletePaciente,
  findAllPacientes,
  findPacienteById,
  updatePaciente,
} from '../reposirories/pacientes.repository.js';

export const getPacientes = async (req, res, next) => {
  try {
    const pacientes = await findAllPacientes();
    return res.status(200).json(pacientes);
  } catch (error) {
    next(error);
  }
};
export const getPaciente = async (req, res, next) => {
  try {
    const { id } = req.params;
    const paciente = await findPacienteById(id);
    if (!paciente) {
      return res.status(404).json(notFound);
    }
    return res.status(200).json(paciente);
  } catch (error) {
    next(error);
  }
};
export const postPaciente = async (req, res, next) => {
  try {
    const { nome, email, idade } = req.body;
    const paciente = await createPaciente(nome, email, idade);
    return res.status(201).json(paciente);
  } catch (error) {
    next(error);
  }
};
export const putPaciente = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { nome, email, idade } = req.body;
    const paciente = await updatePaciente(id, nome, email, idade);
    if (!paciente) {
      return res.status(404).json(notFound);
    }
    return res.status(201).json(paciente);
  } catch (error) {
    next(error);
  }
};
export const reqDeletePaciente = async (req, res, next) => {
  try {
    const { id } = req.params;
    const linesDeleted = await deletePaciente(id);
    if (linesDeleted === 0) {
      return res.status(404).json(notFound);
    }
    return res.status(204).send();
  } catch (error) {
    next(error);
  }
};
