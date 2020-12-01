const Avaliacao = require("../models/Avaliacao");
const Paciente = require("../models/Paciente");
const Profissional = require("../models/ProfissionalDaSaude");

module.exports = {
  async criar(req, res) {
    const { idPaciente, tipoPerfil } = req;

    if (tipoPerfil !== "paciente") {
      return res
        .status(401)
        .send({ error: "Você não possui autorização para esta ação!!" });
    }

    const { estrelas, comentario, ProfissionalDaSaudeId } = req.body;

    try {
      const paciente = await Paciente.findByPk(idPaciente);

      if (!paciente) {
        return res.status(400).send({ error: "Paciente não encontrado(a)" });
      }

      const profissional = await Profissional.findByPk(ProfissionalDaSaudeId);

      if (!profissional) {
        return res
          .status(400)
          .send({ error: "Profissional não encontrado(a)" });
      }

      const avaliacao = await Avaliacao.create({
        estrelas,
        comentario,
        PacienteId: idPaciente,
        ProfissionalDaSaudeId,
      });

      res.status(200).send(avaliacao);
    } catch (error) {
      console.log(error);
      return res.status(500).send({
        error:
          "Não foi possivel fazer sua avaliação, por favor tente novamente",
      });
    }
  },

  async deletar(req, res) {
    const { idCentral, tipoPerfil } = req;

    if (tipoPerfil !== "admin") {
      return res
        .status(401)
        .send({ error: "Você não possui autorização para esta ação!!" });
    }

    const { id } = req.params;

    try {
      const avaliacao = await Avaliacao.findByPk(id);

      if (!avaliacao) {
        return res.status(400).send({ error: "Avaliação não encontrada" });
      }

      await avaliacao.destroy();

      res.status(200).send({ sucesso: "Avalição aagada com sucesso" });
    } catch (error) {
      return res.status(500).send({
        error:
          "Não foi posivel excuir este comentario, por favor tente novamente",
      });
    }
  },

  async listarPorMedico(req, res) {
    const { idProfissional, tipoPerfil } = req;

    if (tipoPerfil !== "profissionalDaSaude") {
      return res
        .status(401)
        .send({ error: "Você não possui autorização para esta ação!!" });
    }

    try {
      const avaliacoes = await Avaliacao.findAll({
        where: { ProfissionalDaSaudeId: idProfissional },
        order: [["id", "DESC"]],
        include: [
          {
            association: "Paciente",
            attributes: ["nome", "foto"],
          },
          {
            association: "ProfissionalDaSaude",
            attributes: ["nome", "foto"],
          },
        ],
      });

      if (!avaliacoes) {
        return res.status(400).send({ error: "Avalações não encontradas" });
      }

      res.status(200).send(avaliacoes);
    } catch (error) {
      console.log(error);
      return res.status(500).send({
        error:
          "Não foi possivel listar as avaliações, por favor tente novamente",
      });
    }
  },
};
