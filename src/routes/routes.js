import { Router } from 'express';
import { login } from '../controllers/login.controller.js';
import { getAllPsicologos } from '../controllers/psicologos.controller.js';
import { auth } from '../middlewares/authentication.js';
import { validateLogin } from '../middlewares/requestValidation.js';

const routes = Router();

//LOGIN
routes.post('/login', validateLogin, login);

//PSICOLOGOS
routes.get('/psicologos', auth, getAllPsicologos);
routes.post('/psicologos', auth); //A FAZER
routes.get('/psicologos/:id', auth); //A FAZER
routes.put('/psicologos/:id', auth); //A FAZER
routes.delete('/psicologos/:id', auth); //A FAZER

//PACIENTES
routes.get('/pacientes', auth); //A FAZER
routes.post('/pacientes', auth); //A FAZER
routes.get('/pacientes/:id', auth); //A FAZER
routes.put('/pacientes/:id', auth); //A FAZER
routes.delete('/pacientes/:id', auth); //A FAZER

//ATENDIMENTOS
routes.get('/atendimentos', auth); //A FAZER
routes.post('/atendimentos', auth); //A FAZER
routes.get('/atendimentos/:id', auth); //A FAZER

//DASHBOARD
routes.get('/dashboard/numero-psicologos', auth); //A FAZER
routes.get('/dashboard/numero-pacientes', auth); //A FAZER
routes.get('/dashboard/numero-atendimentos', auth); //A FAZER
routes.get('/dashboard/media-atendimentos-psicologos', auth); //A FAZER

export default routes;
