import { Psicologos } from './psicologos.model.js';
import { Pacientes } from './pacientes.model.js';
import { Atendimentos } from './atendimentos.model.js';

Psicologos.hasMany(Atendimentos, {
  foreignKey: 'psicologo_id',
});

Pacientes.hasMany(Atendimentos, {
  foreignKey: 'paciente_id',
});

export default {
  Psicologos,
  Pacientes,
  Atendimentos,
};
