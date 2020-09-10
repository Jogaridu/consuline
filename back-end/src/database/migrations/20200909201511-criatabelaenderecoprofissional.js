'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable("tblEnderecoProfissional", {
      idEnderecoProfissional: {
        type: Sequelize.INTERGER,
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
        allowNull: false,
      },
      cep: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      createdCidadeId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        refences: {
          model: "tblCidade",
          key: "idCidade",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
      createdEstadoId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        refences: {
          model: "tblEstado",
          key: "idEstado",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable("tblEnderecoProfissional");
  }
};
