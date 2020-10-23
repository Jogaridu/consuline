import React from 'react';


import './styles.css';

import logoConsuline from "../../Assets/logoprojeto1.png"
import { Link } from 'react-router-dom';

function MenuCentral() {

    const SubMenu = ({ itens }) => {
        console.log(itens);

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
                <div className="itensMenu">
                    Central
                </div>
                <div className="itensMenu">
                    Medicos
                    <SubMenu itens={{ Adicionar: "/profissional-saude" }} />
                </div>
                <div className="itensMenu">
                    Filiais
                    <SubMenu itens={{ Adicionar: "/filial", Listar: "/filiais" }} />
                </div>
                <div className="itensMenu">
                    Serviços
                    <SubMenu itens={{ Listar: "/servicos" }} />

                </div>
            </div>

            <div className="desenvolvedor">
                Desenvolvido por <br /> DS3-M | CONSULINE
            </div>
        </div >
    );
}

export default MenuCentral;