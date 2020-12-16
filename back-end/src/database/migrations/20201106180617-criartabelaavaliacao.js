"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable("tblavaliacao", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      estrelas:{
        type:Sequelize.INTEGER,
        allowNull:false,
      },
      comentario:{
        type:Sequelize.TEXT,
        allowNull:false
      },
      PacienteId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        refences: {
          model: "tblpaciente",
          key: "id",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
      ProfissionalDaSaudeId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        refences: {
          model: "tblProfissional",
          key: "id",
        },
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable("tblavaliacao");
  },
};
