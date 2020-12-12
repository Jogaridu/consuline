import api from "./api";

const CHAVE_USUARIO = "@usuario";

export const signin = (usuario) => {
    localStorage.setItem(CHAVE_USUARIO, JSON.stringify(usuario));

    api.defaults.headers.common['Authorization'] = `Bearer ${usuario.token}`;
}

export const signOut = () => {
    localStorage.clear();

    api.defaults.headers.common['Authorization'] = undefined;
}

export const isSignIn = () => {
    const usuario = JSON.parse(localStorage.getItem(CHAVE_USUARIO));

    if (usuario) {
        api.defaults.headers.common['Authorization'] = `Bearer ${usuario.token}`;

    }

    return usuario ? true : false;
}

export const getProfissional = () => {
    const { profissionalDaSaude } = JSON.parse(localStorage.getItem(CHAVE_USUARIO));

    return profissionalDaSaude;
}


export const getCentral = () => {
    const { token } = JSON.parse(localStorage.getItem(CHAVE_USUARIO));

    return token;
}