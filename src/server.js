import express from 'express';
import { PORT } from './envConfig.js';
import routes from './routes/routes.js';

const app = express();

app.use(express.json());
app.use(routes);

app.listen(PORT, () =>
  console.log(`Servidor ativo em http://localhost:${PORT}`)
);
