import { findAllPsicologos } from '../reposirories/psicologos.repository.js';

export const getAllPsicologos = async (req, res) => {
  try {
    const psicologos = await findAllPsicologos();
    res.status(200).json(psicologos);
  } catch (error) {
    next(error);
  }
};
