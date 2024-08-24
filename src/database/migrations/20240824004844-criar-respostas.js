'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('respostas', {
      id: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4,
      },
      conteudo: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      perguntaId: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {
          model: 'perguntas',
          key: 'id'
        },
        onUpdate: 'CASCADE',// vai atualizar esse campo caso o id do questionario seja atualizado
        onDelete: 'CASCADE' // vai apagar o item caso questionário seja deletado
      },
      usuarioId: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {
          model: 'usuarios',
          key: 'id'
        },
        onUpdate: 'CASCADE',// vai atualizar esse campo caso o id do questionario seja atualizado
        onDelete: 'CASCADE' // vai apagar o item caso questionário seja deletado
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
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('respostas')
  }
};
