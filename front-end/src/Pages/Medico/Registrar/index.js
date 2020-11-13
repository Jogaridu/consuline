import React from 'react';
import { Switch, Route } from "react-router-dom";

import MenuCentral from "../../../Components/MenuCentral";
import TituloPrincipal from "../../../Components/TituloPrincipal";
import DadosMedico from "./infoPessoalMedico";
import DadosMedicoEndereco from "./infoLocalizacaoMedico";
import DadosMedicoLogin from "./infoLoginMedico";
import DadosMedicoEspecialidade from "./infoEspecialidade";

import add from "../../../Assets/add3.png"

function Medico() {
    return (
        <div className="container-central">
            <MenuCentral />
            <div className="container-conteudo-central">

                <TituloPrincipal nome="Cadastro médico" imagem={add} />


                <Switch>
                    <Route path="/profissional-saude/endereco" component={DadosMedicoEndereco} />

                    <Route path="/profissional-saude/login" component={DadosMedicoLogin} />

                    <Route path="/profissional-saude/especialidade" component={DadosMedicoEspecialidade} />

                    <Route path="/profissional-saude" component={DadosMedico} />

                    {/* <Route path="/profissionais-saude" component={ListarMedicos} /> */}
                </Switch>

            </div>
        </div>
    );
};

export default Medico;
