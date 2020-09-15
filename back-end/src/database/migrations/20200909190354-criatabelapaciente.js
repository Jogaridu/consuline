'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    return queryInterface.createTable("tblPaciente", {

      pacienteId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },

      nome: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      celular: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },

      login: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },

      senha: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      dataNascimento: {
        type: Sequelize.DATEONLY,
        allowNull: false,
      },

      email: {
        type: Sequelize.DATEONLY,
        allowNull: false,
        unique: true
      },

      rg: {
        type: Sequelize.DATEONLY,
        allowNull: false,
        unique: true
      },

      cpf: {
        type: Sequelize.DATEONLY,
        allowNull: false,
        unique: true
      },

      foto: {
        type: Sequelize.DATEONLY,
        allowNull: true,
      },

      emailValidado: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },

      planoDeSaudeId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        refences: {
          model: "tblPlanoDeSaude",
          key: "planoDeSaudeId"
        }
      },

      enderecoPacienteId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        refences: {
          model: "tblEnderecoPaciente",
          key: "enderecoPacienteId,"
        }
      },

      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },

      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    })

  },

  down: async (queryInterface, Sequelize) => {

    return queryInterface.dropTable("tblPaciente");

  }
};
