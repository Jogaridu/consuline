import React, { useState } from "react";

import CircularProgress from '@material-ui/core/CircularProgress';

import './styles.css';

function BotaoPrincipal(props) {

    const loading = props.loading;

    const [effectLoading, setEffectLoading] = useState(false);

    return (
        <button type={props.tipo} className="botao-principal" onClick={() => {
            if (loading !== undefined) {
                setEffectLoading(!effectLoading);
                setTimeout(() => setEffectLoading(false), 6000);
            }

            if (props.funcExec !== undefined) {
                props.funcExec();
            }
        }}>
            {effectLoading && loading !== undefined && loading !== false ? (<CircularProgress size={30} style={{ color: "#fff" }} />) : (props.titulo)}
        </button>
    );
}

export default BotaoPrincipal;
