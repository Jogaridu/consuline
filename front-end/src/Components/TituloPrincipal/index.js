import React from 'react';

import './styles.css';

function TituloPrincipal(props) {
    return (
        <div className="titulo-principal">
            <h1>{props.nome || "Sem nome"}</h1>
            <figure>
                <img src={props.imagem} alt="Imagem ilustrativa " />
            </figure>
        </div>
    );
}

export default TituloPrincipal;