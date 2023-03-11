import express from 'express';
import { PORT } from './envConfig.js';

const app = express();

app.listen(PORT, () =>
  console.log(`Servidor ativo em http://localhost:${PORT}`)
);
