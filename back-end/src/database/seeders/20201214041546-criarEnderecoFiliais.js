'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('tblenderecofilial', [
      {
        cep: "06463320",
        rua: "Rua João Rodrigues Nunes",
        bairro: "Jardim Mutinga",
        numero: "354",
        complemento: "",
        estado: "SP",
        cidade: "Barueri",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        cep: "06216240",
        rua: "Rua Ari Barroso",
        bairro: "Presidente Altino",
        numero: "355",
        complemento: "",
        estado: "SP",
        cidade: "Osasco",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        cep: " 04024002",
        rua: "Rua Napoleão de Barros",
        bairro: "Vila Clementino",
        numero: "715",
        complemento: "de 501/502 a 949/950",
        estado: "SP",
        cidade: "São Paulo",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        cep: " 06694230",
        rua: "Rua Jesuíno Joaquim da Silva",
        bairro: "Nova Itapevi",
        numero: "123",
        complemento: "",
        estado: "SP",
        cidade: "Itapevi",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        cep: "03362000",
        rua: "Rua Arapoca",
        bairro: "Vila Formosa",
        numero: "128",
        complemento: "",
        estado: "SP",
        cidade: "Guarulhos",
        createdAt: new Date(),
        updatedAt: new Date()
      },

    ], {});

  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('tblenderecofilial', null, {});

  }
};

