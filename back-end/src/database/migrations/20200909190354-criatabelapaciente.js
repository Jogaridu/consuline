'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    return queryInterface.createTable("tblPaciente", {

      idPaciente: {
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
      planoDeSaudeId:{
        type: Sequelize.INTEGER,
        allowNull:false,
        refences:{
          model:"tblPlanoDeSaude",
          key:"idPlanoDeSaude"
        }
      },
      enderecoPacienteId:{
        type:Sequelize.INTEGER,
        allowNull:false,
        refences:{
          model:"tblEnderecoPaciente",
          key:"idEnderecoPacienete,"
        }
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },

      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    })

  },

  down: async (queryInterface, Sequelize) => {

    return queryInterface.dropTable("tblPaciente");

  }
};
