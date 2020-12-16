import React from 'react';

import './styles.css';

import { BsSearch } from "react-icons/bs";

function InputBusca({ texto }) {
    return (
        <div className="input-busca">
            <BsSearch className="icone" size={20} />

            <input type="text" placeholder={texto} maxLength={80} />
        </div>
    );
}

export default InputBusca;