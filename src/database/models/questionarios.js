const Sequelize = require('sequelize')
const database = require('../config')


const Questionarios = database.define('questionarios', {
  id: {
    type: Sequelize.STRING,
    allowNull: false,
    primaryKey: true,
    defaultValue: Sequelize.UUIDV4,
  },
  titulo: {
    type: Sequelize.STRING,
    allowNull: false
  },
  descricao: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  createdAt: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW,
  },
  updatedAt: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW,
  },
})

Questionarios.hasMany(Perguntas, {
  foreignKey: 'questionarioId',
  as: 'perguntas'
})

module.exports = Questionarios