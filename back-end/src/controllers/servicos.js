const Servico = require("../models/Servico");

module.exports = {
  async cadastrar(req, res) {
    const { nome, descricao } = req.body;

    const { firebaseUrl } = req.file;

    if (nome && descricao && firebaseUrl) {
      try {
        let servicoCriado = await Servico.findOne({
          where: {
            nome: nome,
          },
        });

        console.log(servicoCriado);

        if (servicoCriado) {
          return res.status(400).send("Esse serviço já está cadastrado");
        }

        servicoCriado = await Servico.create({
          nome,
          descricao,
          imagem: firebaseUrl,
        });

        return res.status(201).send(servicoCriado);

      } catch (error) {

        return res.status(404).send({ erro: "Falha na criação do serviço" });

      }
    }

    res.status(400).send({
      erro:
        "Todos os campos devem ser preenchidos (nome, descrição e imagem).",
    });
  },

  async buscarPorId(req, res) {
    const { id } = req.params;

    try {
      const servicoBuscado = await Servico.findByPk(id, {
        raw: true,
        attributes: ["nome", "descricao", "imagem"],
      });

      servicoBuscado
        ? res.status(200).send(servicoBuscado)
        : res.status(404).send({ erro: "Serviço não encontrado" });
    } catch (error) {
      res.status(404).send({ erro: "Falha ao buscar o serviço" });
    }
  },

  async listar(req, res) {
    try {
      const servicoTodos = await Servico.findAll({
        attributes: ["id", "nome", "descricao", "imagem"],
      });

      return res.status(200).send(servicoTodos);
    } catch (error) {
      return res
        .status(404)
        .send({ erro: "Falha ao buscar todos os serviços" });
    }
  },

  async deletar(req, res) {
    const { id } = req.params;

    try {
      const servicoCriado = await Servico.findByPk(id);

      if (servicoCriado) {
        servicoCriado.destroy();
        return res.status(200).send("Serviço apagado com sucesso");
      }

      return res.status(404).send({ erro: "Este serviço não está cadastrado" });
    } catch (error) {
      res.status(404).send({ erro: "Falha ao apagar o registro do serviço" });
    }
  },

  async atualizar(req, res) {
    const { id } = req.params;

    const { firebaseUrl } = req.file;

    try {
      const servicoCriado = await Servico.findByPk(id);

      if (servicoCriado) {
        const { nome, descricao } = req.body;

        await servicoCriado.update({
          nome,
          descricao,
        });

        if (firebaseUrl) {
          servicoCriado.update({
            imagem: firebaseUrl
          });
        }

        res.status(200).send({ sucesso: "Serviço atualizado com sucesso" });

      }

      return res.status(404).send({ erro: "Serviço não encontrado" });
    } catch (error) {
      return res.status(404).send({ erro: "Falha ao atualizar o serviço" });
    }
  },
};
