import { Router } from 'express';
import { login } from '../controllers/login.controller.js';
import {
  getAllPsicologos,
  getOnePsicologo,
  postPsicologo,
  putPsicologo,
  reqDeletePsicologo,
} from '../controllers/psicologos.controller.js';
import { auth } from '../middlewares/authentication.js';
import {
  validateAtendimentos,
  validateLogin,
  validatePsicologosReqBody,
} from '../middlewares/requestValidation.js';
import {
  getMeanAtendimentosPsicologos,
  getNumeroAtendimentos,
  getNumeroPacientes,
  getNumeroPsicologos,
} from '../controllers/dashboard.controller.js';
import {
  getPacientes,
  getPaciente,
  postPaciente,
  putPaciente,
  reqDeletePaciente,
} from '../controllers/pacientes.controller.js';
import {
  getAtendimentos,
  getAtendimento,
  postAtendimento,
} from '../controllers/atendimentos.controller.js';

const routes = Router();

//LOGIN
routes.post('/login', validateLogin, login);

//PSICOLOGOS
routes.get('/psicologos', auth, getAllPsicologos);
routes.post('/psicologos', validatePsicologosReqBody, postPsicologo);
routes.get('/psicologos/:id', auth, getOnePsicologo);
routes.put('/psicologos/:id', auth, validatePsicologosReqBody, putPsicologo);
routes.delete('/psicologos/:id', auth, reqDeletePsicologo);

//PACIENTES
routes.get('/pacientes', auth, getPacientes);
routes.post('/pacientes', auth, postPaciente);
routes.get('/pacientes/:id', auth, getPaciente);
routes.put('/pacientes/:id', auth, putPaciente);
routes.delete('/pacientes/:id', auth, reqDeletePaciente);

//ATENDIMENTOS
routes.get('/atendimentos', auth, getAtendimentos);
routes.post('/atendimentos', auth, validateAtendimentos, postAtendimento);
routes.get('/atendimentos/:id', auth, getAtendimento);

//DASHBOARD
routes.get('/dashboard/numero-psicologos', getNumeroPsicologos);
routes.get('/dashboard/numero-pacientes', getNumeroPacientes);
routes.get('/dashboard/numero-atendimentos', getNumeroAtendimentos);
routes.get(
  '/dashboard/media-atendimentos-psicologos',
  getMeanAtendimentosPsicologos
);

export default routes;
