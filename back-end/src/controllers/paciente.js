const Paciente = require("../models/Paciente");
const EnderecoPaciente = require("../models/EnderecoPaciente");
const { Op } = require("sequelize");
const bcrypt = require('bcryptjs');
const gerarCodigoVerificacao = require("../fixtures/gerarCodigo");
const { enviarSMS } = require("../services/sms");

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
                });

                if (pacienteCriado) {
                    return res.status(400).send("Paciente já cadastrado. Dados que não se repetem: CPF, RG, Login, Email")
                }

                const enderecoPacienteCriado = await EnderecoPaciente.create(endereco);

                dados["codigoVerificacao"] = gerarCodigoVerificacao();

                dados["senha"] = bcrypt.hashSync(dados.senha, 10);

                pacienteCriado = await enderecoPacienteCriado.createPaciente(dados);

                // await enviarSMS({
                //     "numero_destino": `55${pacienteCriado.celular}`,
                //     "mensagem": `Obrigado por se cadastrar na Consuline ${pacienteCriado.nome}! Seu código para confirmação de cadastro é: ${pacienteCriado.codigoVerificacao}`
                // });

                return res.status(201).send(pacienteCriado);

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

    async verificarSms(req, res) {

        const { id } = req.params;
        const { codigo } = req.body;

        const paciente = await Paciente.findOne({
            where: {
                id: id,
                codigoVerificacao: codigo
            }
        });

        if (paciente) {

            paciente.update({
                codigoVerificacao: null,
                verificado: true
            });

            return res.status(200).send();
        }

        res.status(404).send({ erro: "Código inválido ou já validado" })
    },

    async buscarPorId(req, res) { },
    async listar(req, res) { },
    async deletar(req, res) {
        const { id } = req.params;

        const pacienteBuscado = await Paciente.findByPk(id);

        if (pacienteBuscado) {
            pacienteBuscado.destroy();

            return res.status(200).send();
        }

        return res.status(404).send("Paciente não encontrado");

    },
    async atualizar(req, res) { }
};
