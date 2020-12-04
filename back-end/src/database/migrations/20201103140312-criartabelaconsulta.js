"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable("tblConsulta", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      valor: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      desconto: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      data: {
        type: Sequelize.DATEONLY,
        allowNull: false,
      },
      atendida: {
        tyoe: Sequelize.BOOLEAN,
        allowNull: false,
      },
      horario: {
        type: Sequelize.TIME,
        allowNull: false,
      },
      descricao: {
        type: Sequelize.TEXT,
        allownull: false,
      },
      sintomas: {
        type: Sequelize.STRING,
<<<<<<< HEAD
        allownull: false,
=======
        allownull: true
>>>>>>> bee8d2cdfbda6ce7d203e160a41e6bdc6c9f5a9b
      },
      PacienteId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        refences: {
          model: "tblPaciente",
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
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
      FilialId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        refences: {
          model: "tblfilial",
          key: "id",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
      ServicoId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        refences: {
          model: "tblservico",
          key: "id",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
      PagamentoId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        refences: {
          model: "tblpagamento",
          key: "id",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
      AtendimentoId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        refences: {
          model: "tblatendimento",
          key: "id",
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
    return queryInterface.dropTable("tblconsulta");
  },
};
