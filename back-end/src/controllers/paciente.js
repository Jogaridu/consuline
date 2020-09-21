const Paciente = require("../models/Paciente");
const EnderecoPaciente = require("../models/EnderecoPaciente");
const { Op } = require("sequelize");

module.exports = {
    async cadastrar(req, res) {
        const { endereco, ...dados } = req.body;

        if (endereco && dados) {
            try {
                let pacienteCriado = await Paciente.findOne({
                    where: {
                        [Op.or]: [
                            { cpf: dados.cpf },
                            { rg: dados.rg },
                            { login: dados.login },
                            { email: dados.email }
                        ]
                    }
                })

                if (pacienteCriado) {
                    // return res.status(400).send("Paciente já cadastrado. Dados que não se repetem: CPF, RG, Login, Email")
                }

                const enderecoPacienteCriado = await EnderecoPaciente.create(endereco);
                console.log(enderecoPacienteCriado);
                pacienteCriado = await enderecoPacienteCriado.createPaciente(dados);

                res.status(201).send(pacienteCriado);

            } catch (error) {
                return res.status(404).send({ erro: "Falha ao cadastrar o paciente" });
            }
        }

        res.status(400).send({
            erro: `Todos os campos devem ser preenchidos (
                nome, 
                celular, 
                login,
                senha,
                data de nascimento, 
                email,
                rg,
                cpf,
                foto e 
                endereco
            ).`
        });

    },

    async buscarPorId(req, res) { },
    async listar(req, res) { },
    async deletar(req, res) { },
    async atualizar(req, res) { }
};
