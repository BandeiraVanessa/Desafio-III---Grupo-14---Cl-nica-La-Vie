import { Sequelize } from 'sequelize';
import { DB_NAME, DB_HOST, DB_USER, DB_PASS, DB_PORT } from '../envConfig.js';

const db = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
  dialect: 'mysql',
  host: DB_HOST,
  port: DB_PORT,
});

(async () => {
  try {
    await db.authenticate();
    console.log('Banco de Dados conectado');
  } catch (error) {
    console.error(error);
  }
})();

export default db;
