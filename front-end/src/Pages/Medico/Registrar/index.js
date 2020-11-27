import React from 'react';
import { Switch, Route } from "react-router-dom";

import MenuCentral from "../../../Components/MenuCentral";
import DadosMedico from "./InfoPessoalMedico";
import DadosMedicoEndereco from "./infoLocalizacaoMedico";
import DadosMedicoLogin from "./infoLoginMedico";
import DadosMedicoEspecialidade from "./InfoEspecialidade";
import DadosMedicoFilial from "./InfoFilial";


function Medico() {
    return (
        <div className="container-central">
            <MenuCentral />
            <div className="container-conteudo-central">

                <Switch>
                    <Route path="/profissinal-saude/filial" component={DadosMedicoFilial} />

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
