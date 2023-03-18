import { notFound } from '../errors/standardErrorResponses.js';
import {
  findAllPsicologos,
  findPsicologoById,
  createPsicologo,
  updatePsicologo,
  deletePsicologo,
} from '../reposirories/psicologos.repository.js';

export const getAllPsicologos = async (req, res, next) => {
  try {
    const psicologos = await findAllPsicologos();
    res.status(200).json(psicologos);
  } catch (error) {
    next(error);
  }
};
export const getOnePsicologo = async (req, res, next) => {
  try {
    const { id } = req.params;
    const psicologo = await findPsicologoById(id);
    if (!psicologo) {
      return res.status(404).json(notFound);
    }
    return res.status(200).json(psicologo);
  } catch (error) {
    next(error);
  }
};
export const postPsicologo = async (req, res, next) => {
  try {
    const { nome, email, senha, apresentacao } = req.body;
    const psicologo = await createPsicologo(nome, email, senha, apresentacao);
    return res.status(201).json(psicologo);
  } catch (error) {
    next(error);
  }
};
export const putPsicologo = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { nome, email, senha, apresentacao } = req.body;
    const psicologo = await updatePsicologo(
      id,
      nome,
      email,
      senha,
      apresentacao
    );
    return res.status(201).json(psicologo);
  } catch (error) {
    next(error);
  }
};
export const reqDeletePsicologo = async (req, res, next) => {
  try {
    const { id } = req.params;
    const linesDeleted = await deletePsicologo(id);
    if (linesDeleted === 0) {
      return res.status(404).json(notFound);
    }
    return res.status(204).send();
  } catch (error) {
    next(error);
  }
};
