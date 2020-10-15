import React from 'react';

import './styles.css';

import logoConsuline from "../../Assets/logoprojeto1.png"
import { Link } from 'react-router-dom';

function MenuCentral() {
    return (
        <div className="menu">
            <figure className="iconeMenu">
                <img id="logoprojeto" src={logoConsuline} alt="Logo da empresa Consuline" />
            </figure>

            <div className="topicosMenu">

                <div className="itensMenu">
                    Central
                </div>
                <div className="itensMenu">
                    Medicos
                </div>
                <Link to="cadastrar-filial">
                    <div className="itensMenu">
                        Filiais
                    </div>
                </Link>
                <div className="itensMenu">
                    Serviços
                </div>
            </div>

            <div className="desenvolvedor">
                Desenvolvido por <br /> DS3-M | CONSULINE
            </div>
        </div>
    );
}

export default MenuCentral;