import React from "react";
import MenuCentral from "../../Components/MenuCentral";
import { Rating } from '@material-ui/lab';

import "./styles.css";

import "../../Styles/globalStyle.css";

import imagemCentral from "../../Assets/medico-central-home.png";
import filais from "../../Assets/totalFiliaisCentral.png";
import paciente from "../../Assets/totalPacientesCentral.png";
import medicos from "../../Assets/totalMedicosCentral.png";
import consultas from "../../Assets/totalConsultasCentral.png";
import logo from "../../Assets/logoCentral.png";

import InputBusca from "../../Components/InputBusca";
import BotaoPrincipal from "../../Components/BotaoPrincipal";
import api from "../../Services/api";
import { useEffect } from "react";
import { useState } from "react";

const Home = () => {

    const [profissionais, setProfissionais] = useState([]);

    useEffect(() => {
        const pegarMedicos = async () => {

            try {
                const retorno = await api.get("/profissional");
                console.log(retorno.data);
                setProfissionais(retorno.data);

            } catch (error) {
                console.log(error);

            }
        };

        pegarMedicos()
    }, [])


    return (
        <div className="container-central">
            <MenuCentral />

            <div className="container-conteudo-central" style={{ padding: "30px" }}>
                <div className="cabecalho-dashboard">
                    <figure>
                        <img src={imagemCentral} alt="" />
                    </figure>
                    <p>Bem vindo a central da</p>
                    <img src={logo} alt="Logo consuline" className="logo-central" />
                </div>

                <div className="informacoes-dashboard">
                    <div className="card-informacoes">
                        <figure style={{ borderColor: "#E17F85" }}>
                            <img src={filais} alt="Total filiais imagem" />
                        </figure>
                        <p>Total de Filiais</p>
                        <span>730</span>
                    </div>

                    <div className="card-informacoes">
                        <figure style={{ borderColor: "#312F66" }}>
                            <img src={paciente} alt="Total paciente imagem" />
                        </figure>
                        <p>Total de Pacientes</p>
                        <span>2000</span>
                    </div>

                    <div className="card-informacoes">
                        <figure style={{ borderColor: "#FFDD7B" }}>
                            <img src={medicos} alt="Total médicos imagem" />
                        </figure>
                        <p>Total de Médicos</p>
                        <span>500</span>
                    </div>
                    <div className="card-informacoes">
                        <figure style={{ borderColor: "#32BEA6" }}>
                            <img src={consultas} alt="Total consultas imagem" />
                        </figure>
                        <p>Total de Consultas</p>
                        <span>1000</span>
                    </div>

                </div>

                <div className="medicos-dashboard">
                    <h2>Avaliações dos médicos</h2>
                    <div className="pesquisa">
                        <InputBusca texto="Buscar" />
                        <BotaoPrincipal titulo="BUSCAR" />
                    </div>
                    <div className="lista-card-medicos">
                        {profissionais.map(profissional => (
                            <div className="card-medico">
                                <figure><img src={profissional.foto} alt="Foto profissional" /></figure>
                                <div>
                                    {profissional.nome} <br />
                                    <Rating name="read-only" value={5} readOnly />
                                </div>
                                <div className="visualizar-perfil">
                                    Visualizar perfil
                            </div>
                            </div>
                        ))}
                        {/* */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
