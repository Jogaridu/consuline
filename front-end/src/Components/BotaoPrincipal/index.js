import React from "react";

import './styles.css';

function BotaoPrincipal(props) {
  return (
    <button type={props.tipo} className="botao-principal">
      {props.titulo}
    </button>
  );
}

export default BotaoPrincipal;
