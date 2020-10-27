import React from 'react';

import './styles.css';

function Servicos() {

    const cardServico = ({ titulo, imagem }) => {
        return (
            <li>

            </li>
        )
    }

    return (
        <div className="container-editar-informacoes">
            <div className="rota-editar">Serviços</div>

            <div className="container-editar-servicos">
                <div className="editar-servicos">
                    <h2>Meus serviços</h2>
                    <ul className="lista-servicos">

                    </ul>
                </div>

                <div className="editar-servicos">
                    <h2>Outros serviços</h2>
                </div>
            </div>
        </div>
    );
}

export default Servicos;