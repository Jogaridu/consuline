'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable("tblEnderecoPaciente", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },

      rua: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      bairro: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      numero: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      complemento: {
        type: Sequelize.STRING,
        allowNull: true,
      },

      cep: {
        type: Sequelize.STRING,
        allowNull: false,
      },

<<<<<<< HEAD
      idEstado: {
        type: Sequelize.INTEGER,
        allownull: false,
        references: {
          model: "tblEstado",
          key: "id"
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
      },

      idCidade: {
        type: Sequelize.INTEGER,
        allownull: false,
        references: {
          model: "tblCidade",
          key: "id"
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
=======
      estado: {
        type: Sequelize.STRING,
        allownull: false,
      },

      cidade: {
        type: Sequelize.STRING,
        allownull: false,
>>>>>>> c4cf7c49dfe3af7538d5e38a9fcc10f292694ca1
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

    return queryInterface.dropTable("tblEnderecoPaciente");

  }
};
