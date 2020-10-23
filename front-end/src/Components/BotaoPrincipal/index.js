import React from "react";

import './styles.css';

function BotaoPrincipal(props) {
  return (
    <button type={props.type} className="botao-principal">
      {props.title}
    </button>
  );
}

export default BotaoPrincipal;
