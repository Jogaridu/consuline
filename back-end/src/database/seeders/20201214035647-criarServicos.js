'use strict';
const bcrypt = require("bcryptjs");

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('tblServico', [
      {
        nome: "Clínico geral",
        descricao: "O clínico geral é um profissional da Medicina com amplo conhecimento sobre o funcionamento do corpo humano em seu conjunto. Ele é responsável por acompanhar e diagnosticar possíveis problemas de saúde em seus pacientes.",
        imagem: "imagem",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: "Cardiologista",
        descricao: "Cardiologia é a especialidade médica que se ocupa do diagnóstico e tratamento das doenças que acometem o coração bem como os outros componentes do sistema circulatório.",
        imagem: "imagem",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: "Pediatra",
        descricao: "O médico que cuida de crianças e adolescentes é chamado de pediatra. Ou seja, pediatra é o profissional de Medicina, especializado na saúde de crianças e que presta assistência a esse público específico em seus mais diversos aspectos, tanto de modo preventivo quanto curativo.",
        imagem: "imagem",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: "Nutricionista",
        descricao: "O nutricionista é o profissional da saúde que estuda os alimentos e seus efeitos no organismo humano. Ele preza pela qualidade da alimentação das pessoas, individualmente ou em grupo, indicando quais alimentos podem ser consumidos para garantir uma alimentação saudável, nutritiva e equilibrada.",
        imagem: "imagem",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: "Oftalmologista",
        descricao: "O oftalmologista é o profissional que estuda, diagnostica e trata dos olhos e suas doenças, uma vez que tem por sua responsabilidade realizar consultas, perguntando sobre o histórico da saúde ocular da família do paciente.",
        imagem: "imagem",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: "Urologista",
        descricao: "Urologista é o médico responsável pelo tratamento dos problemas relacionados ao trato urinário de homens e mulheres e genital dos homens. Todo urologista obrigatoriamente teve a formação como médico, especialização (residência médica) em cirurgia geral e especialização (residência médica) em urologia.",
        imagem: "imagem",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: "Ginecologista",
        descricao: " A ginecologia é um ramo da medicina. Sendo uma especialidade própria para estudar, cuidar e tratar a saúde do aparelho reprodutor feminino.",
        imagem: "imagem",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: "Gastroenterologista",
        descricao: "O gastroenterologista é o médico mais especializado para cuidar dos distúrbios que atingem o trato gastrointestinal. Qualquer doença que esteja relacionada com o aparelho digestivo, ou seja, da boca até o ânus, deve ser diagnosticada e tratada por esse profissional.",
        imagem: "imagem",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: "Dermatologia",
        descricao: "O Médico Dermatologista cuida da prevenção e tratamento das doenças do maior órgão do corpo: a pele e seus apêndices, como a boca, os cabelos, as unhas etc.",
        imagem: "imagem",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: "Ortopedista",
        descricao: "O Médico Ortopedista é o especialista no diagnóstico e tratamento das disfunções e lesões do sistema locomotor (músculos, ossos, ligamentos, nervos, articulações, tendões etc.).",
        imagem: "imagem",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});

  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('tblServico', null, {});

  }
};
