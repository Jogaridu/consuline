import React, { useState } from 'react';
import { Switch, Route, BrowserRouter as Router, Redirect } from "react-router-dom";
import { Formik, Form } from "formik";

import './styles.css';
import '../../../Styles/globalStyle.css';

import Informacoes from "./Informacoes";
import Endereco from './Endereco';
import MenuCentral from '../../../Components/MenuCentral';
import TituloPrincipal from '../../../Components/TituloPrincipal';
import Servicos from './Servicos';

import user from "../../../Assets/user.png";

import api from "../../../Services/api";
import validacaoSchema from "./ValidacaoInputSchema";

function Registrar() {

  const [novaFilial, setNovaFilial] = useState({
    nomeFantasia: "Hospital de saOsasco",
    dataAbertura: "05-08-2003",
    cnpj: "12321",
    ie: "00000000",
    email: "j@gmail.com",
    razaoSocial: "jogaridu",
    rua: "",
    bairro: "",
    numero: "",
    complemento: "",
    cep: "",
    cidade: "",
    estado: "",
    servicos: [],
    telefones: ["12315165"],
  });

  const [telaAtual, setTelaAtual] = useState("/filial");

  const cadastrarFilial = async () => {

    try {
      console.log(novaFilial);
      const retorno = await api.post("/filial", novaFilial);

      if (retorno.status === 201) {
        alert("Cadastro realizado com sucesso");

      }

    } catch (error) {
      console.error(error);

    }

  }

  const onSubmit = (values, actions) => {
    console.log("Submit: " + JSON.stringify(values));
    console.log(telaAtual);
  }

  return (
    <div className="container-central">
      <MenuCentral />

      <div className="container-conteudo-central">
        <TituloPrincipal nome="Informações de cadastro" imagem={user} />

        <Router>
          <Formik
            onSubmit={onSubmit}
            initialValues={novaFilial}
            validationSchema={validacaoSchema}>
            <Form>

              <Switch>

                <Route path={`/filial`} exact>
                  {telaAtual === "/filial" ? <Informacoes setTelaAtual={setTelaAtual} /> : <Redirect to={telaAtual} />}
                </Route>

                <Route path="/filial/endereco" exact>
                  {telaAtual === "/filial/endereco" ? <Endereco setTelaAtual={setTelaAtual} /> : <Redirect to={telaAtual} />}
                </Route>

                <Route path="/filial/servicos" exact>
                  {telaAtual === "/filial/servicos" ?
                    <Servicos
                      setNovaFilial={setNovaFilial}
                      servicosSel={novaFilial.servicos}
                      cadastrarFilial={cadastrarFilial}
                      setTelaAtual={setTelaAtual} /> : <Redirect to={telaAtual} />}
                </Route>
              </Switch>

            </Form>
          </Formik>
        </Router>
      </div>
    </div>
  );
}

export default Registrar;