import { Router } from 'express';
import { login } from '../controllers/login.controller.js';
import { validateLogin } from '../middlewares/requestValidation.js';

const routes = Router();

routes.post('/login', validateLogin, login);

export default routes;
