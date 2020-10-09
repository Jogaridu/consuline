import React from 'react';
import CardListagem from '../../../Components/CardListagem';
import MenuCentral from '../../../Components/MenuCentral';
import TituloPrincipal from '../../../Components/TituloPrincipal';

import './styles.css';

function ListarFiliais() {
    return (
        <div className="container-central">
            <MenuCentral />
            <div className="listar-filiais">
                <TituloPrincipal nome="Listar todas as filiais cadastradas" />
                <div className="container-cards">
                    <CardListagem />
                    <CardListagem />
                    <CardListagem />
                    <CardListagem />
                    <CardListagem />
                    <CardListagem />
                    <CardListagem />
                    <CardListagem />
                    <CardListagem />
                    <CardListagem />
                    <CardListagem />
                    <CardListagem />
                    <CardListagem />
                    <CardListagem />
                </div>
            </div>
        </div>
    );
}

export default ListarFiliais;