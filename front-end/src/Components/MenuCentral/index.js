import React from 'react';


import './styles.css';

import logoConsuline from "../../Assets/logoprojeto1.png"
import { Link, Redirect } from 'react-router-dom';
import BotaoPrincipal from "../BotaoPrincipal";
import { signOut } from "../../Services/security"

function MenuCentral() {

    const SubMenu = ({ itens }) => {

        const titulos = Object.keys(itens);

        const itensSubMenuJSX = titulos.map(titulo => {
            return (
                <Link to={`${itens[titulo]}`}>
                    <div className="sub-menu-item">{titulo}</div>
                </Link>
            );
        })

        return (
            <div className="sub-menu-central">
                {itensSubMenuJSX}
            </div>
        )
    }
    return (
        <div className="menu">
            <Link to="home-central">
                <figure className="iconeMenu">
                    <img id="logoprojeto" src={logoConsuline} alt="Logo da empresa Consuline" />
                </figure>
            </Link>

            <div className="topicosMenu">
                <Link to="/home-central">
                    <div className="itensMenu">
                        Home
                    </div>
                </Link>
                <div className="itensMenu">
                    Medicos
                    <SubMenu itens={{ Adicionar: "/profissional-saude", Listar: "/profissionais-saude" }} />
                </div>
                <div className="itensMenu">
                    Filiais
                    <SubMenu itens={{ Adicionar: "/filial", Listar: "/filiais" }} />
                </div>
                <div className="itensMenu">
                    Serviços
                    <SubMenu itens={{ Adicionar: "/servico", Listar: "/servicos" }} />
                </div>
            </div>

            <div className="desenvolvedor">
                <Link to="/" onClick={() => signOut()}>
                    <BotaoPrincipal titulo="Deslogar" />
                </Link>
            </div>
        </div >
    );
}

export default MenuCentral;