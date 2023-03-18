import {
  fieldMustBeType,
  minPasswordLength,
  requiredField,
} from '../errors/standardErrorResponses.js';

export const validateLogin = (req, res, next) => {
  try {
    if (!req.body.email) {
      return res.status(400).json({ message: requiredField('email') });
    }
    if (!req.body.senha) {
      return res.status(400).json({ message: requiredField('senha') });
    }
    if (typeof req.body.email !== 'string') {
      return res
        .status(400)
        .json({ message: fieldMustBeType('email', 'string') });
    }
    if (typeof req.body.senha !== 'string') {
      return res
        .status(400)
        .json({ message: fieldMustBeType('senha', 'string') });
    }
    next();
  } catch (error) {
    next(error);
  }
};
export const validatePsicologosReqBody = (req, res, next) => {
  try {
    if (!req.body.nome) {
      return res.status(400).json(requiredField('nome'));
    }
    if (!req.body.email) {
      return res.status(400).json(requiredField('email'));
    }
    if (!req.body.senha) {
      return res.status(400).json(requiredField('senha'));
    }
    if (!req.body.apresentacao) {
      return res.status(400).json(requiredField('apresentacao'));
    }
    if (typeof req.body.nome !== 'string') {
      return res
        .status(400)
        .json({ message: fieldMustBeType('nome', 'string') });
    }
    if (typeof req.body.email !== 'string') {
      return res
        .status(400)
        .json({ message: fieldMustBeType('email', 'string') });
    }
    if (typeof req.body.senha !== 'string') {
      return res
        .status(400)
        .json({ message: fieldMustBeType('senha', 'string') });
    }
    if (req.body.senha.length < 6) {
      return res.status(400).json({ message: minPasswordLength });
    }
    if (typeof req.body.apresentacao !== 'string') {
      return res
        .status(400)
        .json({ message: fieldMustBeType('apresentacao', 'string') });
    }
    next();
  } catch (error) {
    next(error);
  }
};
export const validatePacienteReqBody = (req, res, next) => {
  try {
    if (!req.body.nome) {
      return res.status(400).json(requiredField('nome'));
    }
    if (!req.body.email) {
      return res.status(400).json(requiredField('email'));
    }
    if (!req.body.idade) {
      return res.status(400).json(requiredField('idade'));
    }
    if (typeof req.body.nome !== 'string') {
      return res
        .status(400)
        .json({ message: fieldMustBeType('nome', 'string') });
    }
    if (typeof req.body.email !== 'string') {
      return res
        .status(400)
        .json({ message: fieldMustBeType('email', 'string') });
    }
    if (typeof req.body.idade !== 'string') {
      return res
        .status(400)
        .json({ message: fieldMustBeType('idade', 'string') });
    }
    next();
  } catch (error) {
    next(error);
  }
};
export const validateAtendimentos = (req, res, next) => {
  try {
    if (!req.body.paciente_id) {
      return res.status(400).json(requiredField('paciente_id'));
    }
    if (!req.body.data_atendimento) {
      return res.status(400).json(requiredField('data_atendimento'));
    }
    console.log(req.body.observacao);
    if (!req.body.observacao) {
      return res.status(400).json(requiredField('observacao'));
    }
    if (typeof req.body.paciente_id !== 'number') {
      return res
        .status(400)
        .json({ message: fieldMustBeType('paciente_id', 'number') });
    }
    if (typeof req.body.data_atendimento !== 'string') {
      return res
        .status(400)
        .json({ message: fieldMustBeType('data_atendimento', 'string') });
    }
    if (typeof req.body.observacao !== 'string') {
      return res
        .status(400)
        .json({ message: fieldMustBeType('observacao', 'string') });
    }
    next();
  } catch (error) {
    next(error);
  }
};
