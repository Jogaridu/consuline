import React from 'react';


import './styles.css';

import logoConsuline from "../../Assets/logoprojeto1.png"

function MenuCentral() {
    return (
        <div className="menu">
            <figure className="iconeMenu">
                <img id="logoprojeto" src={logoConsuline} alt="Logo da empresa Consuline" />
            </figure>

            <div className="topicosMenu">
                <div className="pesquisar">
                    <input type="text" name="" placeholder="PESQUISAR" required=""></input>
                </div>
                <div className="itensMenu">
                    Central
                </div>
                <div className="itensMenu">
                    Medicos
                    <div className="sub-menu">
                        <div className="submenu-adicionar">
                            Adicionar
                        </div>
                        <div className="submenu-listar">
                            Listar
                        </div>
                    </div>
                </div>
                <div className="itensMenu">
                    Filiais
                    <div className="sub-menu">
                        <div className="submenu-adicionar">
                            Adicionar
                        </div>
                        <div className="submenu-listar">
                            Listar
                        </div>
                    </div>
                </div>
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