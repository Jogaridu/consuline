'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('tblFilial', [
      {
        nomeFantasia: "Consuline Barueri",
        dataAbertura: "2000-01-01",
        cnpj: "11111111111111",
        email: "consuline_barueri@email.com",
        ie: "123412341",
        razaoSocial: "Consuline",
        enderecoFilialId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nomeFantasia: "Consuline Osasco",
        dataAbertura: "2000-01-01",
        cnpj: "22222222222222",
        email: "consuline_osasco@email.com",
        ie: "123321123",
        razaoSocial: "Consuline",
        enderecoFilialId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nomeFantasia: "Consuline São Paulo",
        dataAbertura: "2000-01-01",
        cnpj: "33333333333333",
        email: "consuline_sao_paulo@email.com",
        ie: "111111111",
        razaoSocial: "Consuline",
        enderecoFilialId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nomeFantasia: "Consuline Itapevi",
        dataAbertura: "2000-01-01",
        cnpj: "44444444444444",
        email: "consuline_itapevi@email.com",
        ie: "222222222",
        razaoSocial: "Consuline",
        enderecoFilialId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nomeFantasia: "Consuline Guarulhos",
        dataAbertura: "2000-01-01",
        cnpj: "55555555555555",
        email: "consuline_guarulhos@email.com",
        ie: "333333333",
        razaoSocial: "Consuline",
        enderecoFilialId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },

    ], {});

  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('tblFilial', null, {});

  }
};
