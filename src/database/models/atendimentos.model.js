import { DataTypes } from 'sequelize';
import db from '../db.js';
import { Psicologos } from './psicologos.model.js';
import { Pacientes } from './pacientes.model.js';

export const Atendimentos = db.define(
  'Atendimentos',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      unique: true,
    },
    data_atendimento: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    observacao: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    psicologo_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Psicologos,
        key: 'id',
      },
    },
    paciente_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Pacientes,
        key: 'id',
      },
    },
  },
  {
    timestamps: false,
    tableName: 'atendimentos',
  }
);
