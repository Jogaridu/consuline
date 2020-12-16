const request = require("supertest");
const app = require("../../src/app");
const connection = require("../../src/database");

describe("PACIENTES", () => {

    afterAll(() => {
        connection.close();
    });


    it("É possivel cadastrar um paciente", async () => {
        const retorno = await request(app).post("/paciente").send({
            "nome": "Jorge",
            "celular": "11912341234",
            "login": "jogaridu",
            "senha": "123",
            "dataNascimento": "2001-01-30",
            "email": "consulinetcc2020@gmail.com",
            "rg": "3856041274",
            "cpf": "44284537873",
            "endereco": { "rua": "Rua Jorge", "bairro": "Bairro Jorge", "numero": "121212", "complemento": "casa 12", "cep": "12345-123", "cidade": "Jandira", "estado": "SP" }
        });

        expect(retorno.ok).toBeTruthy();
        expect(retorno.body.paciente).toHaveProperty("id")
    });

    it("É verficar o SMS do cliente", async () => {
        const retorno = await request(app).post("/paciente").send({
            "nome": "Jorge",
            "celular": "11943214321",
            "login": "admin",
            "senha": "admin",
            "dataNascimento": "2001-01-30",
            "email": "consulinetcc2020@gmail.com.br",
            "rg": "3856041222",
            "cpf": "44284537811",
            "endereco": { "rua": "Rua Jorge", "bairro": "Bairro Jorge", "numero": "121212", "complemento": "casa 12", "cep": "12345-123", "cidade": "Jandira", "estado": "SP" }

        });

        const response = await request(app).post(`/paciente/${retorno.body.paciente.id}/validacao-sms`).send({
            "codigo": retorno.body.paciente.codigoVerificacao
        });

        console.log(response.body.paciente);
        expect(retorno.ok).toBeTruthy();

    });
});