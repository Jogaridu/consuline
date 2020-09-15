"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable("tblProfissionalDaSaude", {
      profissionalDaSaudeId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      cpf: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      nome: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      crm: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      login: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      senha: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      foto: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      avaliacao: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      enderecoProfissionalId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        refences: {
          model: "tblEnderecoProfissional",
          key: "enderecoProfissionalId",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
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
    return queryInterface.dropTable("tblProfissionalDaSaude");
  },
};
