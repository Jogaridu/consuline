import React from "react";

import './styles.css';

function BotaoSecundario(props) {
  return (
    <button type="button" className="botao-secundario">
      {props.title}
    </button>
  );
}

export default BotaoSecundario;