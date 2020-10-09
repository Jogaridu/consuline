import React from 'react';

import teste from "../../Assets/add.png";
import maisOpcoes from "../../Assets/3pontos.png"
import './styles.css';
import { useState } from 'react';

function CardListagem() {

    const [mostrarSubMenu, setMostrarSubMenu] = useState(false);

    const SubMenu = () => {
        return (
            <ul className="sub-menu">
                <li>Editar</li>
                <li>Ativar/Desativar</li>
                <li>Consulta completa</li>
            </ul>
        )
    }

    return (
        <div className="card-listagem">
            <figure className="imagem-card-listagem">
                <img src={teste} alt="" />
            </figure>
            <div className="titulo-card-listagem">Hosp. Clinicas</div>
            <div className="local-card-listagem">São Paulo/SP</div>
            <div className="telefone-card-listagem">(11) 91234-1234</div>
            <div
                className="mais-opcoes"
                onClick={() => {
                    setMostrarSubMenu(!mostrarSubMenu);
                    setTimeout(() => {
                        setMostrarSubMenu(false)
                    }, 10000);
                }}>
                ...
            </div>
            {mostrarSubMenu && (<SubMenu />)}

        </div>
    );
}

export default CardListagem;