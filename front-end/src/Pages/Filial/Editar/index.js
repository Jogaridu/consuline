import React from 'react';
import MenuCentral from '../../../Components/MenuCentral';
import TituloPrincipal from '../../../Components/TituloPrincipal';

import lupa from "../../../Assets/lupa.png"

import './styles.css';

function EditarFilial() {
    return (
        <div className="container-central">
            <MenuCentral />

            <div className="container-conteudo-central">
                <TituloPrincipal nome="Consulta do cadastro" imagem={lupa} />
            </div>
        </div>
    );
}

export default EditarFilial;