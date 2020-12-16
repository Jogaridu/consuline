import React from "react";

import './styles.css';

function BotaoSecundario(props) {
  return (
    <button type="button" className="botao-secundario" onClick={() => props.onClick()}>
      {props.titulo}
    </button>
  );
}

export default BotaoSecundario;